
const Header =() =>{
  return(
    <div className="wrap-header">
        <div className="logo">
          <img src="./images/logo.svg" alt="Logo" className="logo__img" />
        </div>
        <div className="logo-conteiner">
            <button className="list-item">PRODUCTS 
            <span></span></button>
            <button className="list-item">GALLERY</button>
            <button className="list-item">CONTACT</button>
         
        </div>
        <div className="log-but">
          <button className="log in">LOG IN</button>
          <button className="sing in">SING UP</button>
        </div>
    </div>

  )
}

export default Header