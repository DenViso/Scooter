// import ProductInfo from "./ProductInfo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { log } from "console";
import logo from "./images/logo.svg";






const Header =() =>{

  // const[LogIn,setLogIn] = useState(false);
  // const[logUp,setLogUp] = useState(false);

 
  const handleDropMenu = () => {
    const drop = document.getElementById("drop");
    if (drop) {
      drop.style.display = 
      (drop.style.display === "block") ? "none" : "block";
     
    }
  }

  const logInDropMenu =()=>{
    const logIn = document.getElementById("login-form");
    if (logIn) {
      logIn.style.display = 
      ( logIn.style.display === "block") ? "none" : "block";
      
    }
  }  

  const singUpDropMenu =()=>{
    const singUp = document.getElementById("singUp-form");
    if (singUp) {
      singUp.style.display = 
      ( singUp.style.display === "block") ?"block"  :"none" ;

    }
    // setLogIn(prev => !prev)
  }  
  // console.log(LogIn);
  
  return(
    <div className="wrap-header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo__img" />
        </div>
        <div className="logo-conteiner">
            <button className="list-item"
            // onMouseEnter={()=> handleDropMenu()}
            onMouseLeave={()=> handleDropMenu()}
            onMouseDown={() => handleDropMenu()}
            >PRODUCTS 
            <span></span></button>
            <button className="list-item">GALLERY</button>
            <button className="list-item">CONTACT</button>
         
          <div className="logo-drop__list" id="drop">
            <ul className="drop-list">
              <li className="drop-item">
                <a href="./ProductInfo" className="drop-link">Product Information</a>
              {/* <Link to="/ProductInfo">Product Information</Link> */}
              </li>
              <li className="drop-item">
                <a href="" className="drop-link">High Efficiency Motor</a>
              </li>
              <li className="drop-item">
                <a href="" className="drop-link">Multiple Accessories</a>
              </li>
              <li className="drop-item">
                <a href="" className="drop-link">Gallery</a>
              </li>
              <li className="drop-item">
                <a href="" className="drop-link">Colors</a>
              </li>
            </ul>

          </div>
         </div>
        <div className="log-but">

          <button className="log in"
            onClick={()=> logInDropMenu()}>LOG IN</button>
          {/* {LogIn 
          ?  */}
          <div className="login-form"
           id = "login-form">
            <form action="" className="login" id= "logIn">
              <label htmlFor="email">Enter your email </label>
              <input type="email" name="email"/>
              <label htmlFor="password">Enter your password</label>
              <input type="password" name="password" />
              <button>LOG IN</button>
            </form>
          </div>
          {/* :null} */}

          <button className="sing in"
            onClick={()=>singUpDropMenu()}>SING UP</button>
         {/* {singUp && */}
          <div className="login-form"
           id = "singUp-form">
            <form action="" className="login" id= "singUp">
              <label htmlFor="text">Enter your name</label>
              <input type="text" name="text"/> 
              <label htmlFor="email">Enter your email </label>
              <input type="email" name="email"/>
              <label htmlFor="password">Enter your password</label>
              <input type="password" name="password" />
              <label htmlFor="password">Enter your password agen</label>
              <input type="password" name="password" />
              <button>LOG IN</button>
            </form>
          </div>
          {/* } */}
        </div>
       
    </div>

  )
}

export default Header