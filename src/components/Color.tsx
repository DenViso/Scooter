import React from 'react'

function Color() {

  
  return (
    <div className='wrap-color'>
     <div className="color-header">
     <h2 className="title bot">Colors</h2>
      <p className="text">Checkout our products colors.</p>
     </div>
      <div className="color-img__cont" id ="cont" 
      style={{background:" url(./images/Colors/White.svg)", backgroundSize:"98vw",}}>
     
         <div className="img-box ">
         <div className="box">
          <img className="color-img blue" src="./images/Colors/blue.svg" alt="" />
          <span>01</span>
          </div>
       
          
          <div className="box">
          <img className="color-img green" src="./images/Colors/green.svg" alt="" />
          <span>02</span>
          </div>
        
        
          <div className="box">
            <img className="color-img red" src="./images/Colors/red.svg" alt="" />
            <span>03</span>
            </div>
        
        
          <div className="box">
          <img className="color-img black" src="./images/Colors/black.svg" alt="" />
          <span>04</span>
          </div>
      
         </div>
       
      </div>

    </div>
  )
}

export default Color