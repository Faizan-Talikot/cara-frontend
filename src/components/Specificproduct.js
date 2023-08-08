import React from "react";
import { useLocation } from 'react-router-dom'
// import productContext from "../context/products/productContext";
// import f1 from "../img/products/f1.jpg";
import { Link } from "react-router-dom";
import n1 from "../img/products/n1.jpg";
import n2 from "../img/products/n2.jpg";
import n3 from "../img/products/n3.jpg";
import n4 from "../img/products/n4.jpg";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Specificproduct = (props) => {
  const location = useLocation();
  // console.log("location",location)
  // const {handleAddProduct} = props;

  
    
  return (
    <div>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={location.state.image} width="100%" id="MainImg" alt="" />
         </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>{location.state.name}</h4>
          <h2>{location.state.price}.00</h2>
          <select id="select" style={{width: "86px",display: "inline-block", marginRight:"18px"}}>
            {/* <option>Select Size</option> */}
            <option>XL</option>
            <option>XXL</option>
            <option>Large</option>
            <option>Small</option>
          </select>
          <button className="normal" id="add-carts" onClick={()=>{props.handleAddProduct(location.state.image,location.state.name,location.state.price,location.state.id)}} >
          
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2 style={{ display: props.disable ? "none" : "" }}>New Arrivals</h2>
        <p style={{ display: props.disable ? "none" : "" }}>Summer Collection New Modern Design</p>
        <div className="pro-container reveal">
          <div className="pro">
            <img src={n1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
              </div>
              <h4>$78</h4>
            </div>
            <Link to="#">
              <i className="lni lni-shopping-basket cart"></i>
            </Link>
          </div>

          <div className="pro">
            <img src={n2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
              </div>
              <h4>$78</h4>
            </div>
            <Link to="#">
              <i className="lni lni-shopping-basket cart"></i>
            </Link>
          </div>

          <div className="pro">
            <img src={n3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
              </div>
              <h4>$78</h4>
            </div>
            <Link to="#">
              <i className="lni lni-shopping-basket cart"></i>
            </Link>
          </div>

          <div className="pro">
            <img src={n4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
                <i className="lni lni-star-fill"></i>
              </div>
              <h4>$78</h4>
            </div>
            <Link to="#">
              <i className="lni lni-shopping-basket cart"></i>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Specificproduct;
