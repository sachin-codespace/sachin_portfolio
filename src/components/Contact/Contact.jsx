import React from "react";
import './Contact.css'
const Contact = () => {
    
    return (
        <div id="contact" className="contact">
            <h1 className="contact-heading">Get in touch</h1>
            <div className="contact-section">
                <div className="contact-left">
                    <h1 className="contact-heading2">Let's talk</h1>
                    <p className="contact-para">I'm currenctly availale to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail"><a className="contact-links" href="mailto:sachinprajapatijaipur@gmail.com">
                            <img className="contact-image" src="https://www.freeiconspng.com/thumbs/gmail-icon/gmail-icon-23.png" />
                            <p>
                                sachinprajapatijaipur@gmail.com</p></a></div>
                        <div className="contact-detail"><a className="contact-links" href="tel:7427021509">
                            <img className="contact-image" src="https://static.vecteezy.com/system/resources/previews/011/338/343/original/phone-black-icon-with-call-sign-free-png.png" />
                            <p>
                                +91 7427021509
                            </p></a></div>
                        <div className="contact-detail"><a target="_blank" className="contact-links" href="https://maps.app.goo.gl/Cz7q8AUEZG73kCfTA">                            <img className="contact-image" src="https://static.vecteezy.com/system/resources/thumbnails/014/441/443/small/map-marker-icon-3d-design-for-application-and-website-presentation-png.png" />
                            <p> Jaipur, Rajasthan-302013</p></a>
</div></div>
                </div>
                <form action="https://formspree.io/f/moqgpvwp" method="POST" className="contact-right" >
                    <label className="contact-input-head" >Your Name</label>
                    <input type="text" name="name" placeholder="Enter your Name" required />
                    <br />
                    <label className="contact-input-head">Your Email</label>
                    <input type="text" name="email" placeholder="Enter Your Email" required /><br />
                    <label className="contact-input-head" >Write your message here</label>
                    <textarea name="message" className="message" type="text" placeholder="Enter Your Message" required /><br />
                    <button className="submit"  type="submit">Submit</button>

                </form></div>


        </div>
    )
}
export default Contact