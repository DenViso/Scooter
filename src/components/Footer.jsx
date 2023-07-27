import React from 'react'
import footerScooter from"./images/Footer/footerScooter.svg"
import face from "./images/Footer/faceb.png"
import tweet from "./images/Footer/tweet.png"
import inst from "./images/Footer/inst.png"
import { useState } from 'react'
function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleFocusSection = () => {

    
  }

  return (
    <div className='wrap-footer'>
      <div className="main-cont__footer">
        <div className="footer-img">
          <img src={footerScooter} alt="" />
        </div>
<div className="footer-info">
  {/* ABOUT */}
  <div className="about-info">
          <h2 className="footer-title">About</h2>
          <ul className="footer-list">
            <li className="footer-item"><a href="" className="footer-link">Company</a>
            </li>
            <li className="footer-item"><a href="" className="footer-link">Teams</a>
            </li>
            <li className="footer-item"><a href="" className="footer-link">Profile</a>
            </li>
            <li className="footer-item"><a href="" className="footer-link">Carrers</a>
            </li>
          </ul>
        </div>
{/* RESOURCES */}
        <div className="resources-info">
          <h2 className="footer-title">Resources</h2>
          <ul className="footer-list">
            <li className="footer-item"><a href="" className="footer-link">Contact</a>
            </li>
            <li className="footer-item"><a href="" className="footer-link">Application</a>
            </li>
            <li className="footer-item"><a href="" className="footer-link">FQA Features</a>
            </li>
          </ul>
        </div>
{/* LEGALS */}
        <div className="legals-info">
          <h2 className="footer-title">Legals</h2>
          <ul className="footer-list">
            <li className="footer-item"><a href="" className="footer-link">Copyright Privacy</a>
            </li>
         
            <li className="footer-item"><a href="" className="footer-link">Policy Disclaimer</a>
            </li>
          
            <li className="footer-item"><a href="" className="footer-link">Terms</a>
            </li>
          </ul>
          <div className="footer-social_link">
            <a href="" className="social-link"><img src={face} alt="" className="social-img" /></a>
            <a href="" className="social-link"><img src={tweet} alt="" className="social-img" /></a>
            <a href="" className="social-link"><img src= {inst} alt="" className="social-img" /></a>
          </div>
        </div>
</div>
      </div>
      <p>© 2020 Scooter. All rights reserved.</p>
    </div>
  )
}

export default Footer