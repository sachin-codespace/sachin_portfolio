import React from "react";
import './Footer.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
const Footer = () => {
    return (<div>
        <div  className="footer">

            <div className="footer-left">
                <h1 className="footer-head">
                    Sachin's Portfolio
                </h1>
                <p>I am a frontend Developer from India.
                </p><p>
                    I have 1 year of experince of it.</p>
            </div>
            <div className="links">
            <h2 className="Links-head">Essential Links</h2>
<div className="link"><a href="#home" > Home</a></div>
<div className="link"><a href="#about">About </a> </div>
<div className="link"><a href="#work">Projects</a></div>
<div className="link"><a href="#contact">Contact</a></div>
            </div>
            <div className="footer-right">
                <h2 className="footer-right-head">Follow Me</h2>
                <div className="handles">
                    <div className="handle">
                    <a href="https://www.linkedin.com/in/sachin-prajapati-swengineer/"><img src={linkedin} className="handle-image" />
                        LinkedIn</a></div>
                        <div className="handle">
                    <a href="https://github.com/sachin-codespace"><img src={github} className="handle-image" />GitHub</a></div>
                    <div className="handle">
                    <a href="https://twitter.com/sahi7427"><img src={twitter} className="handle-image" /> Twitter</a></div>
                    <div className="handle">
                    <a href="https://www.instagram.com/sahi742702/"><img className="handle-image" src={instagram} />Instagram</a></div>
                    
                </div>
            </div>
            
        </div>
        <hr className="footer-line"/>
        <p className="footer-copyright">
            &copy; 2024 Sachin Prajapati. All rights reserved.
        </p></div>
    )
}
export default Footer