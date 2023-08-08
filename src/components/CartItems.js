import React from 'react'
import { Link} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartItems = (props) => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate("/login");
    }
    if(document.querySelector("body").classList.contains('login')){
      document.querySelector("body").classList.remove('login')
     }
})
    const {cartItems,deleteProduct,resetcoupon1,handleRemoveProduct,handleAddProduct,resetcoupon,calprice,resetcoupon3} = props;
    let size = localStorage.getItem("size");
  return (
    <div>
      <section id="cart" className="section-p1" style={{display: cartItems.length===0?"none":""}}>
        <table width="100%">
          <thead>
            <tr>
              <td style={{display:props.value===true?"none":"" }}>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody className="cart-box">
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td style={{display:props.value===true?"none":"" }}>
                  <Link to="#">
                    <i
                      className="lni lni-close" 
                      onClick={() => {
                        deleteProduct(item.id);resetcoupon3(item.price,item.quantity);
                      }}
                    ></i>
                  </Link>
                </td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.name}[{size ||"" }]</td>
                <td>${item.price}.00</td>
                {/* <td><input type="number" defaultValue={item.quantity} /></td> */}

                <td>
                <i
                    className="lni lni-minus" 
                    style={{display:props.value===true?"none":"" , marginRight: "12px"}}
                    onClick={() => {
                      handleRemoveProduct(item.image, item.name, item.price, item.id);resetcoupon1(item.price);
                    }}
                  ></i>
                  {item.quantity}
                  <i
                    className="lni lni-plus"
                    style={{display:props.value===true?"none":"" , marginLeft: "12px" }}
                    onClick={() => {
                      handleAddProduct(item.image, item.name, item.price, item.id);resetcoupon(item.price);
                    }}
                  ></i>
                  
                </td>

                <td>${calprice(item.price, item.quantity)} .00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default CartItems
