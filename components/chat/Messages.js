import React from 'react'
import { Image } from 'react-bootstrap'

function Messages() {
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
                            <Image src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle" alt="image"/>
                        </figure>
                        <div className="mt-1">
                            <h5>Doris Brown</h5>
                            <small className="online">
                                Online
                            </small>
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
                    <div className="messages">
                        <div className="chats">
                            <div className="chat-avatar">
                                <Image src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle dreams_chat" alt="image"/>
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    Hi James! What’s Up?
                                    <div className="chat-time">
                                        <div>
                                            <div className="time"><i className="bi bi-clock"></i> 10:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-profile-name">
                                    <h6>Doris Brown</h6>
                                </div>
                            </div>
                            <div className="chat-action-btns ms-3">
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
                            </div>
                        </div>
                        <div className="chats chats-right">
                            <div className="chat-content">
                                <div className="message-content">
                                    Good morning, How are you? What about our next meeting?
                                    <div className="chat-time">
                                        <div>
                                            <div className="time"><i className="bi bi-clock"></i> 10:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-profile-name text-end">
                                    <h6>Alexandr</h6>
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
                        <div className="chats">
                            <div className="chat-avatar">
                                <Image src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle dreams_chat" alt="image"/>
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    & Next meeting tomorrow 10.00AM
                                    <div className="chat-time">
                                        <div>
                                            <div className="time"><i className="bi bi-clock"></i>  10:06</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-profile-name">
                                    <h6>Doris Brown</h6>
                                </div>
                            </div>
                            <div className="chat-action-btns ms-3">
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
                            </div>
                        </div>
                        <div className="chat-line">
                            <span className="chat-date">Today</span>
                        </div>
                        <div className="chats chats-right">
                            <div className="chat-content">
                                <div className="message-content">
                                    Wow Thats Great
                                    <div className="chat-time">
                                        <div>
                                            <div className="time"><i className="bi bi-clock"></i> 10:02</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-profile-name text-end">
                                    <h6>Alexandr</h6>
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
                        <div className="chats">
                            <div className="chat-avatar">
                                <Image src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle dreams_chat" alt="image"/>
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    <div className="download-col">
                                        <ul>
                                            <li>
                                                <div className="image-download-col">
                                                    <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                        <Image src="/assets/img/chat-download.jpg" alt=""/>
                                                    </a>
                                                    <div className="download-action d-flex align-items-center">
                                                        <div><a href="#"><i className="bi bi-cloud-download-alt"></i></a></div>
                                                        <div><a href="#"><i className="bi bi-ellipsis-h"></i></a></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="image-download-col image-not-download">
                                                    <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                        <Image src="/assets/img/chat-download.jpg" alt=""/>
                                                    </a>
                                                    <div className="download-action d-flex align-items-center">
                                                        <div><a href="#"><i className="bi bi-cloud-download-alt"></i></a></div>
                                                        <div><a href="#"><i className="bi bi-ellipsis-h"></i></a></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="image-download-col image-not-download">
                                                    <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                        <Image src="/assets/img/chat-download.jpg" alt=""/>
                                                    </a>
                                                    <div className="download-action d-flex align-items-center">
                                                        <div><a href="#"><i className="bi bi-cloud-download-alt"></i></a></div>
                                                        <div><a href="#"><i className="bi bi-ellipsis-h"></i></a></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-time">
                                        <div>
                                            <div className="time"><i className="bi bi-clock"></i> 10:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-profile-name">
                                    <h6>Doris Brown</h6>
                                </div>
                            </div>
                            <div className="chat-action-btns ms-3">
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
                            </div>
                        </div>
                        <div className="chats chats-right">
                            <div className="chat-content">
                                <div className="message-content">
                                    <div className="file-download d-flex align-items-center">
                                        <div className="file-type d-flex align-items-center justify-content-center me-2">
                                            <i className="far fa-file-archive"></i>
                                        </div>
                                        <div className="file-details">
                                            <span className="file-name">filename.zip</span>
                                            <span className="file-size">10.6MB</span>
                                        </div>
                                        <div className="download-action d-flex align-items-center">
                                            <div><a href="#"><i className="bi bi-cloud-download-alt"></i></a></div>
                                            <div><a href="#"><i className="bi bi-ellipsis-h"></i></a></div>
                                        </div>
                                    </div>
                                    <div className="chat-time">
                                        <div>
                                            <div className="time"><i className="bi bi-clock"></i> 10:02</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-profile-name text-end">
                                    <h6>Alexandr</h6>
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
                        
                    </div>
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
                    <input type="text" className="form-control chat_form" placeholder="Enter Message....."/>
                    <div className="form-buttons">
                        <button className="btn send-btn" type="submit">
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