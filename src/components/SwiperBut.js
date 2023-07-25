// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperBut() {
  const swiper = useSwiper();

  return (
    <div className="slider"> 
    <button onClick={() => swiper.slidePrev()}>&larr;</button>
      <button onClick={() => swiper.slideNext()}>&rarr;</button>
   
    </div>
  );
}