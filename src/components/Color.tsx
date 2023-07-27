import React from 'react'
import blue from './images/Colors/blue.svg'
import green from './images/Colors/green.svg'
import red from './images/Colors/red.svg'
import black from './images/Colors/black.svg'
import bg from './images/Colors/White.svg'

function Color() {

  
  return (
    <div className='wrap-color'>
     <div className="color-header">
     <h2 className="title bot">Colors</h2>
      <p className="text">Checkout our products colors.</p>
     </div>
      <div className="color-img__cont" id ="cont" 
      style={{backgroundImage:`url(${bg})`, backgroundSize:"100%",}}>
     
         <div className="img-box ">
         <div className="box">
          <img className="color-img blue" src={blue} alt="" />
          <span>01</span>
          </div>
       
          
          <div className="box">
          <img className="color-img green" src={green} alt="" />
          <span>02</span>
          </div>
        
        
          <div className="box">
            <img className="color-img red" src={red} alt="" />
            <span>03</span>
            </div>
        
        
          <div className="box">
          <img className="color-img black" src={black} alt="" />
          <span>04</span>
          </div>
      
         </div>
       
      </div>

    </div>
  )
}

export default Color