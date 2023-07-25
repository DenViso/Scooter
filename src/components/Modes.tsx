import React from 'react'

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
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Material : Aluminium alloy</p>
            </li>
            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Color : Black</p>
            </li>
            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Capacity : 45lbs</p>
            </li>
            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Ease : Steady & adjustable</p>
            </li>
          </ul>
          <img src="./images/Product/holder.svg" alt="" className="section1-img_holder s1p" />
          <img src="./images/Product/motoHolder.svg" alt="" className="section1-img_holder" />
        </div>

        <div className="modes-content__section1">
        <img src="./images/Product/moto-bag.svg" alt="" className="section1-img_holder " />
          <img src="./images/Product/bag.svg" alt="" className="section1-img_holder s2p" />
          
          <ul className="section1-list">
          <li className="section1-item"><h3 className="section1-title">Shopping Rack</h3></li>

            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Material : Aluminium alloy</p>
            </li>
            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Color : Black</p>
            </li>
            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
              <p className="section1-text">Capacity : 45lbs</p>
            </li>
            <li className="section1-item">
              <img src="./images/Product/icon.png" alt="" className="section1-img" />
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