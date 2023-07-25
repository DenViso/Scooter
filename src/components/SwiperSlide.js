// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperBut from "./SwiperBut"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man1.png" alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man2.png" alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man3.png" alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man1.png" alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man2.png" alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man3.png" alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man1.png" alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man2.png" alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man3.png" alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man1.png" alt="" />
            <p>Serhiy Hipskyy <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man2.png" alt="" />
            <p>Justus Menke <br /><span>CEO Eronaman</span></p>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <img src="./images/testimonials/stars.png" alt="" />
          <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</h3>
          <div className="card-cont">
            <img src="./images/testimonials/man3.png" alt="" />
            <p>Britain Eriksen <br /><span>CEO Universal</span></p>
          </div>
        </div></SwiperSlide>
      
        <SwiperBut/>
    </Swiper>
  );
};