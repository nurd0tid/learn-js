import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'

function Sidebar() {
    return (
        <div className="sidebar-menu">
            <div className="logo-col">
                <Link href="index.html"><Image src="https://dreamschat.dreamstechnologies.com/template-html/template2/assets/img/logo.png" alt=""/></Link>
            </div>
            <div className="menus-col">
                <div className="chat-menus">
                    <ul>
                        <li>
                            <a href="index.html" className="chat-unread blue">
                                <span className="material-icons">message</span>
                                <span>Chats</span>
                            </a>
                        </li>
                        <li>
                            <a href="group.html" className="chat-unread pink">
                                <span className="material-icons">group</span>
                                <span>Groups</span>
                            </a>
                        </li>
                        <li>
                            <a href="status.html" className="chat-unread">
                                <span className="material-icons">library_books</span>
                                <span>Status</span>
                            </a>
                        </li>
                        <li>
                            <a href="audio-call.html" className="chat-unread">
                                <span className="material-icons">call</span>
                                <span>Calls</span>
                            </a>
                        </li>
                        <li>
                            <a href="settings.html" className="chat-unread">
                                <span className="material-icons">settings</span>
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-menus">
                    <ul>
                        <li>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add-new-group">
                                <span className="material-icons group-add-btn">group_add</span>
                                <span>Add Groups</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="add-contacts-btn" data-bs-toggle="modal" data-bs-target="#add-contact">
                                <i className="bi bi-plus" style={{ fontSize: '20px' }}></i>
                                <span>Add Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="dark-mode-toggle" className="dark-mode-toggle">
                                <i className="bi bi-moon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="chat-profile-icon" data-bs-toggle="dropdown">
                                <Image src="/assets/img/avatar/avatar-13.jpg" alt=""/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item dream_profile_menu">Edit Profile <span className="edit-profile-icon"><i className="bi bi-edit"></i></span></a>
                                <a href="#" className="dropdown-item">Profile <span className="profile-icon-col"><i className="fa fa-id-card-alt"></i></span></a>
                                <a href="settings.html" className="dropdown-item">Settings <span className="material-icons">settings</span></a>
                                <a href="archived.html" className="dropdown-item">Archived <span className="material-icons">flag</span></a>
                                <a href="login-email.html" className="dropdown-item">Logout <span className="material-icons">power_settings_new</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar