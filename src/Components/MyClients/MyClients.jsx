import React from 'react'
import '../../Global-Style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './MyClients.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


import Rec58 from '../Assets/Rectangle 58.png'
import Rec59 from '../Assets/Rectangle 59.png'
import Rec60 from '../Assets/Rectangle 60.png'
import Rec61 from '../Assets/Rectangle 61.png'
import ArrL from '../Assets/ArrowLeft.svg'
import ArrR from '../Assets/ArrowRight.svg'

const MyClients = () => {
  return (
    <div className='myclients'>
      <h1>Мои клиенты</h1>
      <h4 className='fs-400 fw-bold'>Мне доверяют самые известные компании <br />
        Санкт-Петербурга и Москвы</h4>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <div className='clients-slide-con'>
          <div className="slide-content">
            <div className="card-wrapper">
              <SwiperSlide>
                <div className="card"><img src={Rec58} alt="" /></div>
                <div className="card"><img src={Rec59} alt="" /></div>
                <div className="card"><img src={Rec60} alt="" /></div>
                <div className="card"><img src={Rec61} alt="" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card"><img src={Rec58} alt="" /></div>
                <div className="card"><img src={Rec59} alt="" /></div>
                <div className="card"><img src={Rec60} alt="" /></div>
                <div className="card"><img src={Rec61} alt="" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card"><img src={Rec58} alt="" /></div>
                <div className="card"><img src={Rec59} alt="" /></div>
                <div className="card"><img src={Rec60} alt="" /></div>
                <div className="card"><img src={Rec61} alt="" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card"><img src={Rec58} alt="" /></div>
                <div className="card"><img src={Rec59} alt="" /></div>
                <div className="card"><img src={Rec60} alt="" /></div>
                <div className="card"><img src={Rec61} alt="" /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card"><img src={Rec58} alt="" /></div>
                <div className="card"><img src={Rec59} alt="" /></div>
                <div className="card"><img src={Rec60} alt="" /></div>
                <div className="card"><img src={Rec61} alt="" /></div>
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>
    </div >
  )
}

export default MyClients
