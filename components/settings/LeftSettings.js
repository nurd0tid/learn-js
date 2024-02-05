import React from 'react'

function LeftSettings({ children }) {
  return (
    <div className="sidebar-group left-sidebar chat_sidebar">
        <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <div className="slimscroll">
                <div className="sidebar-body">
                  <div className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                      <div className="chat-title">
                          <h4>Settings</h4>
                      </div>
                  </div>
                </div>
              {children}
            </div>
        </div>
    </div>

  )
}

export default LeftSettings