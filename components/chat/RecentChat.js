import React, { useState, useEffect } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Image } from 'react-bootstrap';

SwiperCore.use([Pagination, Navigation]);

function RecentChat(props) {
  const {
    recentChat
  } = props;

  return (
    <>
      <div className="left-chat-title d-flex justify-content-between align-items-center">
          <div className="chat-title">
              <h4>RECENT CHATS</h4>
          </div>
          <div className="add-section">
              <ul>
                  <li><a href="group.html"><span className="material-icons">group</span></a></li>
                  <li><a href="#" data-bs-toggle="modal" data-bs-target="#add-user"><i className="bi bi-plus" style={{ fontSize: '20px' }}></i></a></li>
              </ul>
          </div>
      </div>

      <div className="search_chat has-search">
        <i className="bi bi-search form-control-feedback" style={{ fontSize: '16px' }}/>
        <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts"/>
      </div>

      {recentChat && recentChat.length > 0 ? (
        <div className="top-online-contacts">
          <Swiper
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
          >
            {recentChat.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="top-contacts-box" style={{ marginRight: '5px', marginLeft: '5px' }}>
                      {item.photo ? (
                        <div className="profile-img">
                          <Image src={`${process.env.NEXT_PUBLIC_URL}/img/users/${item?.photo}`} alt={`Avatar ${index + 1}`} style={{ maxWidth: '45px', height: '45px', marginTop: '5px' }}/>
                        </div>
                      ) : (
                        <div style={{ maxWidth: '45px', height: '45px', borderRadius: '5px', color: "#420BA1", backgroundColor: "#E8DBFF", textAlign: 'center', padding: '13px', marginRight: '10px', marginLeft: '10px' }}>
                          {item.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    <div className="profile-name">
                        <span>{item.name}</span>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
      <div className="top-online-contacts">
        <p>Not Available recent chats.</p>
      </div>
      )}
    </>

  )
}

export default RecentChat