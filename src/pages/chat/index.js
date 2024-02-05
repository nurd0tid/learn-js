import React, { useEffect, useState } from 'react'
import RecentChat from '../../../components/chat/RecentChat'
import LeftChat from '../../../components/chat/LeftChat'
import Messages from '../../../components/chat/Messages'
import RightChat from '../../../components/chat/RightChat'
import supabase from '../../../supabase'
import { formatDistanceToNow } from 'date-fns';
import { Image } from 'react-bootstrap'

function Chat() {
  const [chat, setChat] = useState([]);
  const [initialFetchChatComplete, setFetchChatComplete] = useState(false)
  const [activeRoomId, setActiveRoomId] = useState(null);

  useEffect(() => {
  const fetchChat = async () => {
      const { data, error } = await supabase.from('users').select('*').order('updated_at', { ascending: false });;
      if (error) {
      console.error('Error fetching users:', error.message);
      } else {
      setChat(data);
      setFetchChatComplete(true);
      }
  }

  fetchChat();
  }, []);

  useEffect(() => {
  if (initialFetchChatComplete) {
      const channel = supabase
      .channel('users')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'users' }, handleChatInsert)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, handleChatUpdate)
      .subscribe()

      return () => {
      supabase.removeChannel(channel)
      }
  }
  }, [initialFetchChatComplete])

  const handleChatInsert = (payload) => {
    const { new: newChat } = payload;
    
    setChat((prevChats) => {
      // Tambahkan pesan baru ke awal array
      const updatedChat = [newChat, ...prevChats];
      // Urutkan ulang berdasarkan updated_at dalam urutan menurun
      updatedChat.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      return updatedChat;
    });
  }


  const handleChatUpdate = (payload) => {
    const { new: updateChat } = payload;
    
    if (updateChat && updateChat.last_messages && updateChat.id) {
      setChat((prevChats) => {
        // Mencari indeks item chat yang sesuai dalam array
        const updatedChats = prevChats.map((chat) => {
          if (chat.id === updateChat.id) {
            return {
              ...chat,
              last_messages: updateChat.last_messages,
              updated_at: updateChat.updated_at,
              count_messages_seen: updateChat.count_messages_seen,
              type_messages: updateChat.type_messages,
              last_seen: updateChat.last_seen,
            };
          }
          return chat;
        });

        // Urutkan ulang berdasarkan updated_at dalam urutan menurun
        updatedChats.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        return updatedChats;
      });
    }
  }


  return (
    <>
      <div className="sidebar-group left-sidebar chat_sidebar">
        <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <div className="slimscroll">
                <RecentChat recentChat={chat}/>
                <LeftChat chat={chat} setActiveRoomId={setActiveRoomId} activeRoomId={activeRoomId}/>
            </div>
        </div>
      </div>
      {activeRoomId ? (
        <>
        <Messages roomId={activeRoomId} />
          <RightChat roomId={activeRoomId} />
        </>
      ) : (
        <div className="chat d-flex align-items-center justify-content-center">
          <div className="status-right">
            <div className="audio-chat">
              <Image src="assets/img/avatar/avatar-1.jpg" alt="" className="rounded-circle" height="60" width="60"/>
              <p>Hey, <span className="text-highlight">Muhamad Nur!</span></p>
              <p className="m-0">Please select a chat to start messaging.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chat