// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { useEffect } from 'react';

export default function SwiperBut(
  // {isActive, setIsActive}
  ) {
  const swiper = useSwiper();
  // useEffect(() => {
  //   setIsActive((prev)=>!prev);
  // },[]);
  return (
    <div className="slider"> 
    <button onClick={() => swiper.slidePrev()}>&larr;</button>
      <button onClick={() => swiper.slideNext()}>&rarr;</button>
   
    </div>
  );
}