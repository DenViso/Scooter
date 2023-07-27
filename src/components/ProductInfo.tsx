import React from 'react'
import icon from "./images/Product/icon.png"
import scooter from "./images/Product/scootr.png"

const ProductInfo = () => {
  return (
    <div className= "wrap-product" >
      <div className="prod-header">
        <h1 className="title">Product Information</h1>
        <p className="text">Our Scooter has following unique design and technology features:</p>
      </div>

      <div className="prod-info">
        <img src={scooter} alt="scootr" className="prod-img" />
        <ul className="prod-list">
          <li className="prod-item">
            <img src={icon} alt="" className="prod-item__img" />
            <p className="prod-item__text">Lightweight aircraft grade aluminium frame</p>
          </li>
          <li className="prod-item">
            <img src={icon} alt="" className="prod-item__img" />
            <p className="prod-item__text">Car grade lithium battery</p>
          </li>
          <li className="prod-item">
            <img src={icon} alt="" className="prod-item__img" />
            <p className="prod-item__text">Self-balanced</p>
          </li>
          <li className="prod-item">
            <img src={icon} alt="" className="prod-item__img" />
            <p className="prod-item__text">Plug n play</p>
          </li>
          <li className="prod-item">
            <img src={icon} alt="" className="prod-item__img" />
            <p className="prod-item__text">Quick release adapter</p>
          </li>
          <li className="prod-item">
            <img src={icon} alt="" className="prod-item__img" />
            <p className="prod-item__text">RFID key card</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductInfo