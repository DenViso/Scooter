import React from 'react'

function Subscribe() {
  return (
    <div className='wrap-subscribe'>
    <h2 className="title">Subscribe To Newsletter</h2>    
    <p className="text">Subscribe to our newsletter to get amazing offers in future.</p>
    <form  className="subsc-form" action="#">
      <input  type="email" placeholder="Enter your email."/>
      <button>Get start</button>
    </form>
    </div>
  )
}

export default Subscribe