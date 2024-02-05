import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { formatDistanceToNow } from 'date-fns';

function LeftChat(props) {
    const {
    chat, 
    setActiveRoomId,
    activeRoomId
    } = props;

    const handleChatItemClick = (roomId) => {
        setActiveRoomId(roomId);
    };

    return (
        <div className="sidebar-body" id="chatsidebar">
            <div className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                <div className="chat-title">
                    <h4>Chats</h4>
                </div>
                <div className="add-section">
                    <a href="#"><i className="bi bi-pencil-square"/></a>
                </div>
            </div>

            {chat && chat.length > 0 ? (
            <ul className="user-list mt-2">
                {chat.map((item, index) => (
                    <li
                        className={`user-list-item ${item.room_id === activeRoomId ? 'active' : ''}`}
                        key={item.id}
                        onClick={() => handleChatItemClick(item.room_id)}
                    >
                        {item.photo ? (
                            <div className="avatar avatar-online">
                                <Image src={`${process.env.NEXT_PUBLIC_URL}/img/users/${item?.photo}`} className="rounded-circle" alt="image"/>
                            </div>
                        ) : (
                            <div>
                                <div className="avatar avatar-online">
                                    <div className="letter-avatar">
                                        {item.name.slice(0, 2).toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="users-list-body">
                            <div>
                                <h5>{item.name}</h5>
                                <p>{item.last_messages}</p>
                            </div>
                            <div className="last-chat-time">
                                <small className="text-muted">
                                    {item.updated_at
                                        ? formatDistanceToNow(new Date(item.updated_at), { addSuffix: true })
                                        : 'N/A'}
                                </small>
                                {item.count_messages_seen === '0' ? (
                                    <></>
                                    ) : (
                                    <div className="new-message-count">{item.count_messages_seen}</div>
                                )}
                            </div>    
                        </div>
                    </li>
                ))}
            </ul>
            ) : (
                <div className="user-list">Not Available chats.</div>
            )}
        </div>
    )
}

export default LeftChat