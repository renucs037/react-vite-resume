import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import  r4 from '../../assets/r4.png'

function About() {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            {/* <img src={r4} alt="" /> */}
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm experienced fullstack developer with 3+years of professional expertise in the field.Throughout my career.I have had the privilege of collbarating with prestigious organization to thier sucess and growth.</p>
                <p> My passion for fullstack development is not only reflected my carrer but also in the enthusiasm and dedication I bring to each projects</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML,CSS,bs</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>React js</p><hr style={{width:'80%'}}/></div>
                <div className="about-skill"><p>Node js</p><hr style={{width:'50%'}}/></div>
                    
            </div>
        </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1> 
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>4+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            
      </div>
    </div>
  )
}

export default About
