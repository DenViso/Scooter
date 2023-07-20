

function Hero() {
  return (
    <div className='wrap-hero'>
      <div className="hero-top">

      <div className="hero-info">
        <h1 className="hero-title">Let's ride
          <br />
          <span>the future.</span>
        </h1>
        <span></span>
        <p className="hero-text">Simple and sleek design with users <br /> in mind.</p>
        <div className="hero-cont">
          <button className="hero-btn">Buy now
            <span></span></button>
          <p>Watch our <br />
            video how <br />
            it works</p>
          <img src="./images/Hero/play button.svg" alt="how it work" className="hero-img" />
        </div>
      </div>

      <div className="imag-side">
        <img src="./images/Hero/scootr-main.svg" alt="scooter" className="scooter-img" />
      </div>

      <div className="hero-section">
        <p>01</p>
        <button className="hero-btn__left"></button>
        <button className="hero-btn__right"></button>
      </div>

      <div className="hero-footer">
        <ul className="hero-list">
          <li className="hero-item">
            <h4 className="hero-item__title">105 <span>lbs</span>
            </h4>
            <p className="hero-item__text">Net Weight</p>
          </li>
          <li className="hero-item">
            <h4 className="hero-item__title">26 <span>
            mph</span>
            </h4>
            <p className="hero-item__text">Top Speed</p>
          </li>
          <li className="hero-item">
            <h4 className="hero-item__title">38 <span>
            miles</span>
            </h4>
            <p className="hero-item__text">Max Range</p>
          </li>
          <li className="hero-item">
            <h4 className="hero-item__title">89 <span>
            nm</span>
            </h4>
            <p className="hero-item__text">Max Torques</p>
          </li>
          <li className="hero-item">
            <h4 className="hero-item__title">22% <span>slope</span>
            </h4>
            <p className="hero-item__text">Hill Climbing</p>
          </li>
          <li className="hero-item">
            <h4 className="hero-item__title">2x</h4>
            <p className="hero-item__text">Hydralic Disc Brakes</p>
          </li>
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Hero