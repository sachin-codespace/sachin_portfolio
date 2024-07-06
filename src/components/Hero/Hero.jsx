import React from "react";
import './Hero.css'
import my from "../../assets/my2.jpg"
import resumePdf from "../../assets/resume.pdf";
const Hero = () => {
    return (
        <div id="hero" className="hero">
            <img className="hero-img" src={my} />
            <h1 className="hero-heading"><span>I'm Sachin Prajapati,</span> Dedicated to Frontend Developer.</h1>
            <p>"Dedicated to excellence and continuous learning in Web Developer, committed to driving impactful results through expertise."</p>
            <div className="hero-action">
                <div className="hero-connect"> <a href="#contact">Connect With Me </a></div>
                <div className="hero-resume"><a href={resumePdf} download="Sachin_Prajapati_Resume.pdf">
                    My Resume</a></div>
            </div>
        </div>
    )
}
export default Hero