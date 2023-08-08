import React from "react";
import {useNavigate} from "react-router-dom";
import CartItems from "./CartItems";
import Footer from "./Footer";
import { useEffect } from "react";

const Cart = (props) => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate("/login");
    }
    if(document.querySelector("body").classList.contains('login')){
      document.querySelector("body").classList.remove('login')
     }
})
  const redirect = ()=>{
    navigate("/shop")
  }
  const redirect1 = ()=>{
    navigate("/checkout")
  }
  const { cartItems, handleAddProduct, handleRemoveProduct, deleteProduct ,calprice,applyCoupon,resetcoupon,resetcoupon1,totalprice,resetcoupon3 } = props;
  console.log(cartItems);
  // useEffect((e) => {
  //     e.preventDefault();
  //   },[]);

 

  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#let's_Shop</h2>
        <p>BUY IT NOW, it's best for you!</p>
      </section>

      {cartItems.length === 0 && <div style={{fontSize:"50px",margin:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>No items are added!!!
      <button className="normal" id="add-carts" style={{backgroundColor:"#088178",color:"#fff",width:"150px",marginTop:"10px"}} 
      onClick={redirect}>Shop Now</button>
      </div>}

      <p style={{display: cartItems.length===0?"none":"",textAlign: "center",fontSize: "35px",marginBottom: "0",marginTop: "35px",
       fontWeight: "bold"}}>YOUR CART</p>
      <CartItems cartItems={cartItems} deleteProduct={deleteProduct} resetcoupon1={resetcoupon1} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} resetcoupon={resetcoupon} calprice={calprice} resetcoupon3={resetcoupon3}/>

      <section id="cart-add" className="section-p1" style={{display: cartItems.length===0?"none":""}}>
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" className="couponcode" />
            <button className="normal" id="applybtn" onClick={applyCoupon}>
              Apply
            </button>
          </div>
          <div>
            <p className="message">Successfully Applied!</p>
          </div>
          <div>
            <span className="messageforwrong">Invalid Coupon code!</span>
          </div>
          <div>
            <span className="cartempty">Your Cart is Empty!</span>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td id="totalcost">${totalprice}.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>CouponDiscount</td>
                <td id="valueofdiscount">$0.00</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong id="costaftercoupon">${totalprice}.00</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="normal" id="proceedcheckout" onClick={redirect1}>
            Proceed to checkout
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
