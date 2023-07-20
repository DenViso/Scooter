

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

      </div>
    </div>
  )
}

export default Hero