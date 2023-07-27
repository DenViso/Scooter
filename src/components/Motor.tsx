 import React from 'react'
 import motor from "./images/motor/motor.svg"

function Motor() {
  return (
    <div className='wrap-motor'>
      <h2 className="title">High Efficiency Motor</h2>
      <p className="text">More torque for powerful riding with 22% maximum hill climbing capability.</p>
      <img src={motor} alt="motor" className="motor-img" />
    </div>
  )
}

export default Motor