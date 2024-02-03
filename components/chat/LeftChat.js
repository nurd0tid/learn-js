import React from 'react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Image } from 'react-bootstrap';

SwiperCore.use([Pagination, Navigation]);

function LeftChat() {
  const avatarImages = [
    '/assets/img/avatar/avatar-1.jpg',
    '/assets/img/avatar/avatar-2.jpg',
    '/assets/img/avatar/avatar-3.jpg',
    '/assets/img/avatar/avatar-4.jpg',
    '/assets/img/avatar/avatar-7.jpg',
    '/assets/img/avatar/avatar-8.jpg',
    '/assets/img/avatar/avatar-9.jpg',
    '/assets/img/avatar/avatar-10.jpg',
  ];

  return (
    <div className="sidebar-group left-sidebar chat_sidebar">
      <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
        <div className="slimscroll">
          <div className="left-chat-title d-flex justify-content-between align-items-center">
              <div className="chat-title">
                  <h4>CHATS</h4>
              </div>
              <div className="add-section">
                  <ul>
                      <li><a href="group.html"><span className="material-icons">group</span></a></li>
                      <li><a href="#" data-bs-toggle="modal" data-bs-target="#add-user"><i className="bi bi-plus" style={{ fontSize: '20px' }}></i></a></li>
                  </ul>
              </div>
          </div>

          <div className="search_chat has-search">
            <span className="fas fa-search form-control-feedback"></span>
            <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts"/>
          </div>

          <div className="top-online-contacts">
            <Swiper
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
            >
              {avatarImages.map((avatar, index) => (
                <SwiperSlide key={index}>
                  <div className="top-contacts-box">
                      <div className="profile-img online">
                          <Image src={avatar} alt={`Avatar ${index + 1}`}/>
                      </div>
                      <div className="profile-name">
                          <span>helen</span>
                      </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftChat