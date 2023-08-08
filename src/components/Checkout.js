import React from "react";
import CartItems from "./CartItems";
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import productContext from "../context/products/productContext";
import { useContext,useEffect } from "react";
import swal from 'sweetalert';

const Checkout = (props) => {
  const context = useContext(productContext);
  const {orders,getOrders,addOrder} = context;
  let navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate("/login");
    }
    if(document.querySelector("body").classList.contains('login')){
      document.querySelector("body").classList.remove('login')
     }
})
  
  const { cartItems, handleAddProduct, handleRemoveProduct, deleteProduct, calprice, resetcoupon, resetcoupon1, resetcoupon3,checkouttotal,handleplaceorder} = props;
  
  const checkouttotalprice = ()=>{
       let newprice = checkouttotal();
       if(newprice){

           newprice = newprice.slice(1,6)
       }
       newprice = parseInt(newprice)
      return newprice = newprice + 10;
  }
 
  const handleclick = ()=>{
    let name = document.querySelector('#name').value;
            let street = document.querySelector('#street').value;
            let city = document.querySelector('#city').value;
            let state = document.querySelector('#state').value;
            let pincode = document.querySelector('#pincode').value;
            let landmark = document.querySelector('#landmark').value;
            let address = document.querySelector('#address').value;
            let total = document.querySelector('#my-final-total').innerHTML;
            console.log(total)
            if(name.length<5){
              swal({
                title: "Name Should be more than 5 characters",
                icon: "warning",
            });
            }
            else if(street.length<5){
              swal({
                title: "Street Should be more than 5 characters",
                icon: "warning",
            });
            }
            else if(city.length<5){
              swal({
                title: "City Should be more than 5 characters",
                icon: "warning",
            });
            }
            else if(state.length<5){
              swal({
                title: "State Should be more than 5 characters",
                icon: "warning",
            });
            }
            else if(pincode.length<5){
              swal({
                title: "Pincode Should be more than 5 characters",
                icon: "warning",
            });
            }
            else if(landmark.length<5){
              swal({
                title: "Landmark Should be more than 5 characters",
                icon: "warning",
            });
            }
            else if(address.length<5){
              swal({
                title: "Address Should be more than 5 characters",
                icon: "warning",
            });
            }
            else{
              addOrder(name,street,city,state,pincode,landmark,address,total,cartItems);       
              handleplaceorder();
            }
  }
  

    
  return (
    <div>
      <section id="form" style={{ marginTop: "100px" }}>
        <div id="checkout-details">
          <h2>CHECKOUT</h2>
          <p>Delivery Address</p>

          <input type="text" id="name" placeholder="name" minLength={5}  />
          <input type="text" id="street" placeholder="Street" minLength={5} />
          <div id="three-input">
            <input type="text" id="city" placeholder="City" minLength={5}/>
            <input type="text" id="state" placeholder="State" minLength={5}/>
            <input type="text" id="pincode" placeholder="Pincode" minLength={5}/>
          </div>
          <input type="tel" id="landmark" placeholder="Phone No." minLength={10} />
          <textarea id="address" cols="30" rows="10" placeholder="Address" minLength={10}></textarea>
        </div>
        <div className="bill">
          <h4>Your Order</h4>
          <table className="tableofbill">
            <tbody>
              <tr>
                <td>price</td>
                <td>
                  <strong id="item-price" style={{ marginRight: "-26px" }}>
                    {checkouttotal() || "$0.00"}
                  </strong>
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>
                  <strong id="my-shipping">$0.00</strong>
                </td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>
                  <strong id="my-discount">$10.00</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="totalrow">
            <h2>Total</h2>
            <span>
              <strong id="my-final-total">${checkouttotalprice()|| 0}.00</strong>
            </span>
          </div>
          {/* <form>
                <label>Select Payment Option:</label>

                <input type="checkbox"/>Cod
                    <input type="checkbox"/>GooglePay
                    <input type="checkbox"/>Paytm 
                <select name="" id="select">
                    <option value="">Paytm</option>
                    <option value="">Cod</option>
                    <option value="">GooglePay</option>
                </select>
            </form> */}
          <p>
            Your Personal data will be used to process your order,support your experience throughout this website, and for other purposes described in our <span style={{ color: "#f4511e" }}>privacy policy</span>
          </p>
          <button className="normal" id="orderComplete" onClick={()=>handleclick()}>
            Place Order
          </button>
        </div>
      </section>

      <p style={{ display: cartItems.length === 0 ? "none" : "", textAlign: "center", fontSize: "35px", marginBottom: "0", marginTop: "35px", fontWeight: "bold" }}>YOUR CART</p>
      <CartItems cartItems={cartItems} deleteProduct={deleteProduct} resetcoupon1={resetcoupon1} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} resetcoupon={resetcoupon} calprice={calprice} resetcoupon3={resetcoupon3} value={true} />

      <Footer/>
     </div>
  );
};

export default Checkout;
