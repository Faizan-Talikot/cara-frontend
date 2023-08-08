import React, { useEffect } from 'react'
import f1 from '../img/features/f1.png'
import f2 from '../img/features/f2.png'
import f3 from '../img/features/f3.png'
import f4 from '../img/features/f4.png'
import f5 from '../img/features/f5.png'
import f6 from '../img/features/f6.png'
import Footer from './Footer'
import Newarrivals from './Newarrivals'
import Newsletter from './Newsletter'
import Products from './Products'
import { useNavigate } from 'react-router-dom'
// import functionality from '../functionality'

const Home = ({productItems , handleAddProduct ,productItems2}) => {
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
      <section id="hero">
        <h4 className="reveal">Trade-in-offer</h4>
        <h2 className="reveal">Super value deals</h2>
        <h1 className="reveal">On all products</h1>
        <p className="reveal">Save more with coupons & up to 70% off!</p>
        <button className="reveal">Shop Now</button>

    </section>
    <section id="feature" className="section-p1">
        <div className="fe-box reveal">
            <img src={f1} alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div className="fe-box reveal">
            <img src={f2} alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box reveal">
            <img src={f3} alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box reveal">
            <img src={f4} alt=""/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box reveal">
            <img src={f5} alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div className="fe-box reveal">
            <img src={f6} alt=""/>
            <h6>24/7 Support</h6>
        </div>
    </section>
    
     <Products productItems={productItems} handleAddProduct={handleAddProduct}/>

     <section id="banner" className="section-m1 reveal">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% off</span>- All t-shirts & Accessories</h2>
        <button className="normal">Explore More</button>
    </section>
    
    <Newarrivals productItems2={productItems2} handleAddProduct={handleAddProduct}/>

    <section id="sm-banner" className="section-p1 reveal">
        <div className="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className="white">Learn More</button>
        </div>

        <div className="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcoming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className="white">Collection</button>
        </div>
    </section>

    <section id="banner3" className="reveal">
        <div className="banner-box">
            <h2>SEASONAL SALE</h2>
            <h3>Winter collection -50% OFF</h3>
        </div>

        <div className="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring / Summer 2022</h3>
        </div>

        <div className="banner-box banner-box3">
            <h2>T-SHIRTS</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </section>

    <Newsletter/>

    <Footer/>
    </div>
  )
}

export default Home
