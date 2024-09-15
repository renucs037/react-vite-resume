import React from 'react'
import './Footer.css'

import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Renuka</h1>
                <p>Im a fullstack developer with 3+years of experience in Snipe-Tech company</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' required/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
           
            </div>
            <hr />
            
            <div className="footer-bottom">
                <p className="footer-bootom-left"> @ 2023 Renu.All  rights reserved</p>
                    <div className="footer-bottom-right">
                        <p>Terms of services</p>
                        <p>privacy policy</p>
                        <p>connect with me</p>
                    </div>
                
            </div>
        
      
    </div>
  )
}

export default Footer
