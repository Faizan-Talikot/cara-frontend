import React from "react";
import { Link } from "react-router-dom";
import a6 from "../img/about/a6.jpg";
import video from "../img/about/1.mp4";
import f1 from "../img/features/f1.png";
import f2 from "../img/features/f2.png";
import f3 from "../img/features/f3.png";
import f4 from "../img/features/f4.png";
import f5 from "../img/features/f5.png";
import f6 from "../img/features/f6.png";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </section>

      <section id="about-head" className="section-p1 reveal">
        <img src={a6} alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nemo atque exercitationem aliquid ducimus repudiandae in nobis ipsam aliquam, vel pariatur a voluptatum oclass=dio quisquam? Minus ab aliquid exercitationem ipsum, incidunt consequuntur quaerat architecto? Rerum ad ducimus similique assumenda dolorem molestias aspernatur doloremque eum dolore? Iure, suscipit totam? Aperiam quidem placeat eum voluptatibus voluptatum nihil laboriosam soluta quaerat nulla molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui non aliquid voluptate cupiditate. </p>

          <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>

          <br></br>
          <br></br>

          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.
          </marquee>
        </div>
      </section>

      <section id="about-app" className="section-p1 reveal">
        <h1>
          Download Our <Link to="#">App</Link>
        </h1>
        <div className="video">
          <video autoPlay muted loop src={video}></video>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box reveal">
          <img src={f1} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box reveal">
          <img src={f2} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box reveal">
          <img src={f3} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box reveal">
          <img src={f4} alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box reveal">
          <img src={f5} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box reveal">
          <img src={f6} alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>

      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default About;
