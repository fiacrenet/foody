import React from 'react'
import '../../styles/Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>    
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p> 
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""  />
                    <img src={assets.twitter_icon} alt=""   />
                    <img src={assets.linkedin_icon} alt=""  />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>CONTACT US</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@foody.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Foody.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
