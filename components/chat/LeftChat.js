import React from 'react'
import { Image } from 'react-bootstrap'

function LeftChat() {
    return (
        <div className="sidebar-body" id="chatsidebar">
            <div className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                <div className="chat-title">
                    <h4>Recent Chats</h4>
                </div>
                <div className="add-section">
                    <a href="#"><i className="bi bi-pencil-square"/></a>
                </div>
            </div>

            <ul className="user-list mt-2">
                <li className="user-list-item">
                    <div className="avatar avatar-online">
                        <Image src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle" alt="image"/>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Regina Dickerson</h5>
                            <p>It seems logical that the</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">05 min</small>
                            <div className="new-message-count">11</div>
                        </div>    
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-away">
                            <Image src="/assets/img/avatar/avatar-9.jpg" className="rounded-circle" alt="image"/>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Forest Kroch</h5>
                            <p>It seems logical that the</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">05 min</small>
                            <div className="new-message-count">11</div>
                        </div>
                    </div>
                </li>
                <li className="user-list-item item-typing">
                    <div>
                        <div className="avatar avatar-online">
                            <Image src="/assets/img/avatar/avatar-10.jpg" className="rounded-circle" alt="image"/>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Regina Dickerson</h5>
                            <p><span className="animate-typing-col">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </span>
                            </p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">05 min</small>
                        </div>
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-online">
                            <div className="letter-avatar">
                                M
                            </div>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Townsend Seary</h5>
                            <p><span className="material-icons">insert_photo</span> Photo</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">45 min</small>
                        </div>
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-online">
                            <Image src="/assets/img/avatar/avatar-11.jpg" className="rounded-circle" alt="image"/>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Margaretta Worvell</h5>
                            <p className="missed-call-col"><span className="material-icons">call_missed</span> Missed Call</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">52 min</small>
                        </div>
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-away">
                            <Image src="/assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image"/>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>#Tech Support</h5>
                            <p><strong>Haidar</strong> : Hi!!!</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="new-message-count">11</div>
                        </div>
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-online">
                            <div className="letter-avatar">
                                A
                            </div>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Harald Kowalski</h5>
                            <p><span className="material-icons">videocam</span> It seems logical that the</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                        </div>
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-away">
                            <Image src="/assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image"/>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Alexandr Donnelly</h5>
                            <p><span className="material-icons">settings_voice</span> 0.25</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                        </div>
                    </div>
                </li>
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-online">
                            <Image src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image"/>
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Regina Dickerson</h5>
                            <p>It seems logical that the</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default LeftChat