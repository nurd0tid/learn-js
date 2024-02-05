import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import supabase from '../../supabase'

function Messages(props) {
    const {
        roomId,
    } = props

    const [chatMessages, setChatMessages] = useState([]);
    const [initialFetchComplete, setInitialFetchComplete] = useState(false);
    const [userData, setUserData] = useState([]);
    const [messages, setMessages] = useState('');

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    useEffect(() => {
        if (roomId) {
            const fetchChat = async () => {
                const { data, error } = await supabase.from('users').select('*').eq('room_id', roomId);
                if (error) {
                    console.error('Error fetching users:', error.message);
                } else if (data.length > 0) {
                    setUserData(data[0]);
                }
            }
            fetchChat();
        }
    }, [roomId]);

    useEffect(() => {
        const fetchChatMessages = async () => {
            if (roomId) {
                try {
                const { data, error } = await supabase
                    .from('messages')
                    .select('*')
                    .eq('room_id', roomId)
                    .order('created_at', { ascending: true });

                if (error) {
                    console.error(error);
                } else {
                    setChatMessages(data);
                    setInitialFetchComplete(true);
                }
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchChatMessages();
    }, [roomId]);

    useEffect(() => {
    if (initialFetchComplete) {
        const channel = supabase
            .channel('messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
            const { room_id, content, created_at, sender_admin_type } = payload.new;
            
                // Only update the state if the new message belongs to the current chatRoomId
                if (room_id === roomId) {
                    // Create a new chat message object with the extracted data
                    const newMessage = { content, created_at, sender_admin_type };

                    // Update the chatMessages state with the new message
                    setChatMessages((prevChatMessages) => [...prevChatMessages, newMessage]);
                }
            })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages' }, (payload) => {

            const { room_id } = payload.new;

            // Only update the state if the updated message belongs to the current chatRoomId
            if (room_id === roomId) {
                    // Create a copy of the chatMessages array
                    const updatedMessages = [...chatMessages];

                    // Find the index of the updated message
                    const updatedIndex = updatedMessages.findIndex((msg) => msg.room_id === room_id);

                    if (updatedIndex !== -1) {
                    // Update the mark_as_read property of the message
                    updatedMessages[updatedIndex].mark_as_read = mark_as_read;

                    // Update the chatMessages state with the updated array
                    setChatMessages(updatedMessages);
                    }
                }
            })
            .subscribe();

            // Clean up the subscription when the component unmounts
            return () => {
                channel.unsubscribe();
            };
        }
    }, [initialFetchComplete, roomId, chatMessages]);

    const handleSendMessage = async (e) => {
        e.preventDefault(); 
        try {
            const userId = userData.id;
            const response = await fetch('/api/telegram/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    roomId,
                    userId,
                    messages,
                }),
            });
            setMessages('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chat" id="middle">
            <div className="slimscroll">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="d-lg-none ms-2">
                            <ul className="list-inline mt-2 me-2">
                                <li className="list-inline-item">
                                    <a className="text-muted px-0 left_side" href="#" data-chat="open">
                                        <i className="bi bi-arrow-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure className="avatar ms-1">
                            {userData.photo ? (
                                <div className="avatar avatar-online">
                                    <Image src={`${process.env.NEXT_PUBLIC_URL}/img/users/${userData?.photo}`} className="rounded-circle" alt="image"/>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '45px',
                                        backgroundColor: '#E8DBFF',
                                        color: '#420BA1',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative'
                                    }}
                                >
                                    {userData && userData.name ? userData.name.slice(0, 2).toUpperCase() : ''}
                                </div>
                            )}
                        </figure>
                        <div className="mt-1">
                            <h5>{userData?.name}</h5>
                            {/* <small className="online">
                                Online
                            </small> */}
                        </div>
                    </div>
                    <div className="chat-options">
                        <ul className="list-inline">
                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                                <a href="#" className="btn btn-outline-light chat-search-btn" >
                                    <i className="bi bi-search"></i>
                                </a>
                            </li>
                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice call">
                                <a href="#" className="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#voice_call">
                                    <i className="bi bi-phone-fill voice_chat_phone"></i>
                                </a>
                            </li>
                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video call">
                                <a href="#" className="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#video_call">
                                    <i className="bi bi-camera-video"></i>
                                </a>
                            </li>
                            <li className="list-inline-item dream_profile_menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                                <a href="#" className="btn btn-outline-light">
                                    <i className="bi bi-person-fill"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-outline-light no-bg" href="#" data-bs-toggle="dropdown">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item dream_profile_menu">Archive <span><i className="bi bi-archive"></i></span></a>
                                    <a href="#" className="dropdown-item">Muted <span className="material-icons">volume_off</span></a>
                                    <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="chat-search">
                        <form>
                            <span className="bi bi-search form-control-feedback"></span>
                            <input type="text" name="chat-search" placeholder="Search Chats" className="form-control"/>
                            <div className="close-btn-chat"><span className="material-icons">close</span></div>
                        </form>
                    </div>
                </div>
                <div className="chat-body">
                    {chatMessages && chatMessages.length > 0 ? (
                        <div className="messages">
                            {chatMessages.map((item, index) => (
                                    !item.sender_admin_type ? (
                                        <div className="chats" key={index}>
                                            <div className="chat-avatar">
                                                {userData.photo ? (
                                                    <Image src={`${process.env.NEXT_PUBLIC_URL}/img/users/${userData?.photo}`} className="rounded-circle dreams_chat" alt="image"/>
                                                ) : (
                                                    <div
                                                        style={{
                                                            width: '45px',
                                                            height: '45px',
                                                            borderRadius: '45px',
                                                            backgroundColor: '#E8DBFF',
                                                            color: '#420BA1',
                                                            fontWeight: '600',
                                                            textAlign: 'center',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        {userData && userData.name ? userData.name.slice(0, 2).toUpperCase() : ''}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="chat-content">
                                                <div className="message-content">
                                                    {item.content}
                                                    <div className="chat-time">
                                                        <div>
                                                            <div className="time"><i className="bi bi-clock"></i> {formatTime(item.created_at)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-profile-name">
                                                    <h6>{userData.name}</h6>
                                                </div>
                                            </div>
                                            <div className="chat-action-btns ms-3">
                                                <div className="chat-action-col">
                                                    <a className="#" href="#" data-bs-toggle="dropdown">
                                                        <i className="bi bi-three-dots-vertical"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item dream_profile_menu">Copy <span ><i className="bi bi-copy"></i></span></a>
                                                        <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                        <a href="#" className="dropdown-item">Forward <span><i className="bi bi-share"></i></span></a>
                                                        <a href="#" className="dropdown-item">Delete <span><i className="bi bi-trash-alt"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="chats chats-right" key={index}>
                                            <div className="chat-content">
                                                <div className="message-content">
                                                    {item.content}
                                                    <div className="chat-time">
                                                        <div>
                                                            <div className="time"><i className="bi bi-clock"></i> {formatTime(item.created_at)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-profile-name text-end">
                                                    <h6>Admin</h6>
                                                </div>
                                            </div>
                                            <div className="chat-avatar">
                                                <Image src="/assets/img/avatar/avatar-12.jpg" className="rounded-circle dreams_chat" alt="image"/>
                                            </div>
                                            <div className="chat-action-btns me-2">
                                                <div className="chat-action-col">
                                                    <a className="#" href="#" data-bs-toggle="dropdown">
                                                        <i className="bi bi-ellipsis-h"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="#" className="dropdown-item dream_profile_menu">Copy <span ><i className="far fa-copy"></i></span></a>
                                                        <a href="#" className="dropdown-item">Save <span className="material-icons">save</span></a>
                                                        <a href="#" className="dropdown-item">Forward <span><i className="bi bi-share"></i></span></a>
                                                        <a href="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></a>
                                                    </div>
                                                </div>
                                                <div className="chat-read-col">
                                                    <span className="material-icons">done_all</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            ))}
                        </div>
                        ) : (
                        <div className="messages">
                            <div className="user-list">Not Available chats.</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="chat-footer">
                <form>
                    <div className="smile-col">
                        <a href="#"><i className="far fa-smile"></i></a>
                    </div>
                    <div className="attach-col">
                        <a href="#"><i className="bi bi-paperclip"></i></a>
                    </div>
                    <input type="text" value={messages} className="form-control chat_form" placeholder="Enter Message....." onChange={(e) => setMessages(e.target.value)}/>
                    <div className="form-buttons" onClick={handleSendMessage}>
                        <button className="btn send-btn">
                            <span className="material-icons">send</span>
                        </button>
                    </div>
                    <div className="specker-col">
                        <a href="#"><span className="material-icons">settings_voice</span></a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Messages