import React from 'react'
import logo from '../img/logo.png'
import app from '../img/pay/app.jpg'
import play from '../img/pay/play.jpg'
import pay from '../img/pay/pay.png'
import { Link} from "react-router-dom";


const Footer = () => {

  return (
    <div>
      <footer className="section-p1 reveal">
        <div className="col">
            <img className="logo" src={logo} alt=""/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                <i className="lni lni-facebook-fill"></i>
                <i className="lni lni-twitter-fill"></i>
                <i className="lni lni-instagram-original"></i>
                <i className="lni lni-pinterest"></i>
                <i className="lni lni-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <Link to="#">About us</Link>
            <Link to="#">Delivery Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & condition</Link>
            <Link to="#">Contact Us</Link>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <Link to="#">Sign In</Link>
            <Link to="#">View Cart</Link>
            <Link to="#">My Wishlist</Link>
            <Link to="#">Track My Order</Link>
            <Link to="#">Help</Link>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google play</p>
            <div className="row">
                <img src={app} alt=""/>
                <img src={play} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt=""/>
        </div>

        <div className="copyright">
            <p>© 2021, Tech2 etc- Html CSS Made by Faizan</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
