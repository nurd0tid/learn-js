import React from 'react'
import RecentChat from '../../../components/chat/RecentChat'
import LeftChat from '../../../components/chat/LeftChat'
import Messages from '../../../components/chat/Messages'
import RightChat from '../../../components/chat/RightChat'

function Chat() {
  return (
    <>
      <div className="sidebar-group left-sidebar chat_sidebar">
        <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <div className="slimscroll">
                <RecentChat/>
                <LeftChat/>
            </div>
        </div>
      </div>
      <Messages/>
      <RightChat/>
    </>
  )
}

export default Chat