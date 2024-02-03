import React from 'react'
import { Image } from 'react-bootstrap'

function RightChat() {
  return (
    <div className="right-sidebar right_sidebar_profile" id="middle1">
      <div className="right-sidebar-wrap active">
        <div className="slimscroll">
          <div className="left-chat-title d-flex justify-content-between align-items-center p-3">
              <div className="chat-title">
                  <h4>PROFILE</h4>
              </div>
              <div className="contact-close_call text-end">
                  <a href="#"
                      className="close_profile close_profile4">
                      <span className="material-icons">close</span>
                  </a>
              </div>
          </div>
          <div className="sidebar-body">
          <div className="mt-0 right_sidebar_logo">
              <div className="text-center mb-2 right-sidebar-profile">
                  <figure className="avatar avatar-xl mb-3">
                      <Image src="/assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image"/>
                  </figure>
                  <h5 className="profile-name">Scott Albright</h5>
                  <div className="online-profile">
                      <span>online</span>
                  </div>
              </div>
              <div>
                  <div className="about-media-tabs">       
                    <nav>
                      <div className="nav nav-tabs justify-content-center" id="nav-tab">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#about">About</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#media" >Media</a>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="about">
                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                        <div className="member-details">
                          <ul>
                            <li>
                              <h6>Phone</h6>
                              <span>555-555-21541</span>
                            </li>
                            <li>
                              <h6>Nick Name</h6>
                              <span>Alberywo</span>
                            </li>
                            <li>
                              <h6>Email</h6>
                              <span><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="16577a7473646f617956717b777f7a3875797b">[email&#160;protected]</a></span>
                            </li>
                          </ul>
                        </div>
                        <div className="social-media-col">
                          <h6>Social media accounts</h6>
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                        <div className="settings-col">
                          <h6>Settings</h6>
                          <ul>
                            <li className="d-flex align-items-center">
                              <label className="switch">
                                <input type="checkbox" defaultChecked/>
                                <span className="slider round"></span>
                              </label>
                              <div>
                                <span>Block</span>
                              </div>
                            </li>
                            <li className="d-flex align-items-center">
                              <label className="switch">
                                <input type="checkbox" defaultChecked/>
                                <span className="slider round"></span>
                              </label>
                              <div>
                                <span>Mute</span>
                              </div>
                            </li>
                            <li className="d-flex align-items-center">
                              <label className="switch">
                                <input type="checkbox" defaultChecked/>
                                <span className="slider round"></span>
                              </label>
                              <div>
                                <span>Get notification</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="media">
                        <div className="file-download-col">
                          <ul>
                            <li>
                              <div className="image-download-col">
                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                  <Image src="/assets/img/chat-download.jpg" alt=""/>
                                </a>
                                <div className="download-action d-flex align-items-center">
                                  <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                  <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image-download-col">
                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                  <Image src="/assets/img/chat-download.jpg" alt=""/>
                                </a>
                                <div className="download-action d-flex align-items-center">
                                  <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                  <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                              </div>
                            </li>
                              <li>
                              <div className="image-download-col">
                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                  <Image src="/assets/img/chat-download.jpg" alt=""/>
                                </a>
                                <div className="download-action d-flex align-items-center">
                                  <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                  <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image-download-col">
                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                  <Image src="/assets/img/chat-download.jpg" alt=""/>
                                </a>
                                <div className="download-action d-flex align-items-center">
                                  <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                  <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                              </div>
                            </li>
                              <li>
                              <div className="image-download-col">
                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                  <Image src="/assets/img/chat-download.jpg" alt=""/>
                                </a>
                                <div className="download-action d-flex align-items-center">
                                  <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                  <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image-download-col">
                                <a href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                  <Image src="/assets/img/chat-download.jpg" alt=""/>
                                </a>
                                <div className="download-action d-flex align-items-center">
                                  <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                  <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                </div>
                              </div>
                            </li>
                            <li className="full-width text-center">
                              <a href="#" className="load-more-btn">More 154 Files <i className="fas fa-sort-down"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
							</div>
						</div>
						<div className="report-col">
							<ul>
								<li><a href="#"><span className="material-icons">report_problem</span> Report Chat</a></li>
								<li><a href="#"><span><i className="far fa-trash-alt"></i></span> Delete Chat</a></li>
							</ul>
						</div>
					</div>
      </div>
    </div>
  )
}

export default RightChat