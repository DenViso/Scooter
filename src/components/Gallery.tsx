import React from 'react'

function Gallery() {
  return (
    <div className="wrap-gallery">
      <h2 className="title">Gallery</h2>
      <p className="text">View gallery of our products and make yourself satisfied with our creation.</p>

  <div className="subwrap">
  <div className="gallery-left">
        <img src="./images/Gallery/left.svg" alt="" />
     
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
        <img src="./images/Gallery/right1.svg" alt="" className="gallery-img" />
        <img src="./images/Gallery/right2.svg" alt="" className="gallery-img" />
       </div>
  </div>
    </div>
  )
}

export default Gallery