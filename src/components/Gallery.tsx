import React from 'react'
import leftImg from './images/Gallery/left.svg'
import rightImg1 from './images/Gallery/right1.svg'
import rightImg2 from './images/Gallery/right2.svg'

function Gallery() {
  return (
    <div className="wrap-gallery">
     
      <h2 className="title">Gallery</h2>
      <p className="text">View gallery of our products and make yourself satisfied with our creation.</p>

      <div className="subwrap">

        <div className="gallery-left">
        <img src={leftImg} alt="" />
     
      <ul className="gallery-list">
        <li className="gallery-item">
          <button className='gallery-btn'>Battery Images</button>
        </li>
        <li className="gallery-item">
          <button className='gallery-btn'>Spare Parts Images</button>
        </li>
        <li className="gallery-item">
          <button className='gallery-btn'>Charging Cable Images</button>
        </li>
      </ul>
        </div>

        <div className="gallery-right">
        <img src={rightImg1} alt="" className="gallery-img" />
        <img src={rightImg2} alt="" className="gallery-img" />
        </div>
      </div>
    </div>
  )
}

export default Gallery