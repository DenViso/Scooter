// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import {  useState } from 'react';
import SwiperBut from "./SwiperBut"
import Man1 from "./images/testimonials/man1.png"
import Man2 from "./images/testimonials/man2.png"
import Man3 from "./images/testimonials/man3.png"
import star from "./images/testimonials/Stars.png"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards'

 

export default () => {
// const [isActive, setIsActive] = useState(false);
  
 
// console.log(isActive)

  return (
   

    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
      <div className="card">
          <img src={star}
          /* <img src={require("./images/testimonials/stars.png").default} alt='mops'/> */
           alt="" /> 
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src={Man1} alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src={Man2} alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src={Man1} alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src={Man2} alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src={Man3} alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src={Man1} alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src={Man3} alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src={Man1} alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src={Man2} alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src={Man2} alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src={Man1} alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src={star} alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src={Man3} alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      
        <SwiperBut 
        // isActive={isActive}
        // setIsActive={setIsActive}
        />
    </Swiper>
  );
};