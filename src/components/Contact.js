import React from "react";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../img/people/1.png';
import img2 from '../img/people/2.png';
import img3 from '../img/people/3.png';

const Contact = () => {
    let navigate = useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem('token')){
          navigate("/login");
      }
      if(document.querySelector("body").classList.contains('login')){
        document.querySelector("body").classList.remove('login')
       }
  })
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1 reveal">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fal fa-map"></i>
                    <p>56 Glassford Street Glasgow G1 1UL New York</p>
                </li>
                <li>
                    <i className="fal fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fal fa-phone-alt"></i>
                    <p>Contact@example.com</p>
                </li>
                <li>
                    <i className="fal fa-clock"></i>
                    <p>Monday to Saturday: 9.00am to 16.00 pm</p>
                </li>
            </div>
        </div>

        <div className="map">
            <iframe title="A"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4226478440182!2d72.84331261393164!3d19.176733753783925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e2d96aaaa9%3A0xe99ecdbf761686fc!2sGhanshyamdas%20Saraf%20College%20of%20Arts%20%26%20Commerce!5e0!3m2!1sen!2sin!4v1662391212452!5m2!1sen!2sin"
                width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="form-details" className="reveal">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" style={{resize:"none"}}></textarea>
            <button className="normal">Submit</button>
        </form>

        <div className="people">
            <div>
                <img src={img1} alt=""/>
                <p><span>John Doe</span> Senior Marketing Manager <br></br> Phone: + 000 123 000 77 88
                    <br></br>Email:contact@example.com</p>
            </div>
            <div>
                <img src={img2} alt=""/>
                <p><span>William Smith</span> Senior Marketing Manager <br></br> Phone: + 000 123 000 77 88
                    <br></br>Email:contact@example.com</p>
            </div>
            <div>
                <img src={img3} alt=""/>
                <p><span>Emma Stone</span> Senior Marketing Manager <br></br> Phone: + 000 123 000 77 88
                    <br></br>Email:contact@example.com</p>
            </div>
        </div>
    </section>

    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Contact;
