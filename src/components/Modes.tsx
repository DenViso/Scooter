import React from 'react'
import icon from  "./images/Product/icon.png"
import holder from "./images/Product/holder.svg"
import motoHolder from "./images/Product/motoHolder.svg"
import motoBag from "./images/Product/motoBag.svg"
import bag from "./images/Product/bag.svg"

function Modes() {
  return (
    <div className='wrap-mpdes'>
      <h2 className="title">Multiple Accessories</h2>
      <p className="text">There are multiple modes for the scooter for your multiple needs.</p>
      
      <div className="modes-content">

        <div className="modes-content__section1">
          
          <ul className="section1-list">
          <li className="section1-item"><h3 className="section1-title">Golf Bag Rock</h3></li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Material : Aluminium alloy</p>
            </li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Color : Black</p>
            </li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Capacity : 45lbs</p>
            </li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Ease : Steady & adjustable</p>
            </li>
          </ul>
          <img src={holder} alt="" className="section1-img_holder s1p" />
          <img src={motoHolder} alt="" className="section1-img_holder" />
        </div>

        <div className="modes-content__section1">
        <img src={motoBag} alt="" className="section1-img_holder s2p1 " />
          <img src={bag} alt="" className="section1-img_holder s2p" />
          
          <ul className="section1-list">
          <li className="section1-item"><h3 className="section1-title">Shopping Rack</h3></li>

            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Material : Aluminium alloy</p>
            </li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Color : Black</p>
            </li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Capacity : 45lbs</p>
            </li>
            <li className="section1-item">
              <img src={icon} alt="" className="section1-img" />
              <p className="section1-text">Ease : Quick & adjustable</p>
            </li>
          </ul>
         
        </div>
      </div>
      <button>
      More Accessories Coming Soon
      </button>
    </div>
  )
}

export default Modes