import React from "react";
import './About.css'
import about from '../../assets/about.png'
const About = () => {
    return (
        <div id="about" >
            <h1 className="about-heading">About Me</h1>
            <div className="about">
            <div className="about-left">
                <img className="about-img" src={about} />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate software developer with expertise in front-end web development technologies. I love building interactive and user-friendly web applications using the latest HTML, CSS, JavaScript and React JS technologies!</p>
                    <p>My goal is to contribute to innovative projects that not only showcase my technical skills but also make a positive impact on users. I am enthusiastic about exploring opportunities to work with dynamic teams where creativity and collaboration drive the development process.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p><hr style={{ width: "65%" }} /></div>
                    <div className="about-skill"><p>CSS</p><hr style={{ width: "65%" }} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{ width: "45%" }} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{ width: "25%" }} /></div>
                </div>
            </div>

        </div></div>
    )
}
export default About