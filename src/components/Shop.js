import React from "react";
import { Link} from "react-router-dom";
import Footer from "./Footer";
import Newarrivals from "./Newarrivals";
import Newsletter from "./Newsletter";
import Products from "./Products";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shop = (props) => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate("/login");
    }
    if(document.querySelector("body").classList.contains('login')){
      document.querySelector("body").classList.remove('login')
     }
})
  const {productItems, productItems2} = props;
  return (
    <div>
      <section id="page-header">
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      <div>
      <Products disable={true} productItems={productItems}/>
      <Newarrivals disable={true} shop={true} productItems2={productItems2}/>
      <section id="pagination" className="section-p1 reveal">
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#"><i className="lni lni-arrow-right"></i></Link>
       </section>
      </div>

      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Shop;
