// import ProductInfo from "./ProductInfo";

import logoImg from "./images/logo.svg";







const Header =() =>{
  
  const logOut = document.getElementById("logOut");
  
  const logIn = document.getElementById("login-form");
  const HandelLogIn = () =>{
if(logIn !== null) {
  logIn.style.display = "block";
console.log("login")
} 

}




 
  

  
  return(
    <div className="wrap-header">
        <div className="logo">
          <img src={logoImg} alt="Logo" className="logo__img" />
        </div>

        <div className="logo-conteiner">
            
          <div className="drop">
            <button className="list-item"
                          >PRODUCTS 
            </button>
            
            <div className="drop-content">
                  <a href="./ProductInfo" className="drop-link">Product Information</a>
                
                  <a href="" className="drop-link">High Efficiency Motor</a>
                                
                  <a href="" className="drop-link">Multiple Accessories</a>
                
                  <a href="" className="drop-link">Gallery</a>
                
                  <a href="" className="drop-link">Colors</a>
               
            </div>
            
          </div>
          
          <button className="list-item">GALLERY</button>
          <button className="list-item">CONTACT</button>
         
        </div>

        <div className="log-but">
          
          <button className="log in"
            onClick={() => HandelLogIn()}
            id = "logIn"
            
            >LOG IN
          </button>
          
          <div className="login-form"
           id = "login-form">
            <form action="" className="logIn" id= "logIn">
            <h1>Login</h1>
              <label htmlFor="email">Enter your email </label>
              <input type="email" name="email"/>
              <label htmlFor="password">Enter your password</label>
              <input type="password" name="password" />
              
              <button>LOG IN</button>
            </form>
          </div>
          

          <button className="sing in">
            SING UP</button>
         
          <div 
          className="login-form"
          id = "singUp-form ">
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
        
        </div>
       
    </div>

  )
}

export default Header