import React from 'react'
import './Hero.css'
import r4 from '../../assets/r4.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={r4} alt="" />
        <h1> <span>I'm Renuka Rangannvar ,</span>fullstack developer </h1>
        <p>I'm fullstack developer ,with 3years of experience in snipe tech company </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
        
        Connect with me</AnchorLink> </div>
                <div className="hero-resume">
                        My resume
                </div>
            </div>
        </div>
      
    
  )
}

export default Hero
