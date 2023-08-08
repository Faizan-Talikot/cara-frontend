import React from "react";
import { Link} from "react-router-dom";
import b1 from '../img/blog/b1.jpg'
import b2 from '../img/blog/b2.jpg'
import b3 from '../img/blog/b3.jpg'
import b4 from '../img/blog/b4.jpg'
import b5 from '../img/blog/b5.jpg'
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
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
      <section id="page-header" className="blog-header">
        <h2>#ReadMore</h2>
        <p>Read all case studies about out products!</p>
      </section>

      <section id="blog">
        <div className="blog-box reveal">
            <div className="blog-img">
                <img src={b1} alt=""/>
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon
                    irony, godard...</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box reveal">
            <div className="blog-img">
                <img src={b2} alt=""/>
            </div>
            <div className="blog-details">
                <h4>How to Style a Quiff</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon
                    irony, godard...</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box reveal">
            <div className="blog-img">
                <img src={b3} alt=""/>
            </div>
            <div className="blog-details">
                <h4>Must-Have Skater Girl Items</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon
                    irony, godard...</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box reveal">
            <div className="blog-img">
                <img src={b4} alt=""/>
            </div>
            <div className="blog-details">
                <h4>Runway-inspired Trends</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon
                    irony, godard...</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box reveal">
            <div className="blog-img">
                <img src={b5} alt=""/>
            </div>
            <div className="blog-details">
                <h4>AW20 Menswear Trends</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon
                    irony, godard...</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
    </section>

    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Blog;
