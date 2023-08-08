import React from 'react'
import Footer from './Footer'
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productContext from '../context/products/productContext';
import Orderitem from './Orderitem';

const Yourorders = () => {
  const context = useContext(productContext);
  const {orders,getOrders , cartItems1} = context;
  let navigate = useNavigate();
//   const displaysection = () =>{
//     console.log("chala")
//     let order = getOrders();
//     let completedetails;
//     let noorder;
//     if(document.getElementById('complete-details')){
//         console.log(document.getElementById('complete-details'))
//       completedetails = document.getElementById('complete-details');
//     }
//     // let completeall = document.getElementById('complete-all');
//     if( document.getElementById('no-order')){
//         console.log(document.getElementById('no-order'))
//         noorder = document.getElementById('no-order');
//     }
//     if(order.length===0){
//         if(completedetails || noorder){
//             completedetails.classList.add('actives')
//             noorder.classList.remove('actives')
//         }
//     }
//     else{
//         if(completedetails || noorder){
//             completedetails.classList.remove('actives')
//             noorder.classList.add('actives')
//         }
//     }
//   }

  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate("/login");
    }
    else{
        getOrders();
    //   displaysection();
    }
    if(document.querySelector("body").classList.contains('login')){
      document.querySelector("body").classList.remove('login')
     }
     // eslint-disable-next-line
},[])

  return (
    <div>
      <section id="order-heading">
        <h1>Your Orders</h1>
        {/* <form className="nosubmit">
            <input className="nosubmit" type="search" placeholder="Search..."/>
        </form> */}
    </section>

    <section id="complete-all">
        <section id="no-order" className={orders.length===0?"":"actives"}>
            <h1>You have no orders!!</h1>
            <a href="/shop"><button>SHOP NOW</button></a>
        </section>
        {orders.map((e,index) => {
          return <Orderitem key={e._id} orders={orders} cartItems1 = {cartItems1} index={index} e={e}/>;
        })}
    </section>
    
    {/* <section id="complete-all">
        <section id="no-order">
            <h1>You have no orders!!</h1>
            <a href="shop.html"><button>SHOP NOW</button></a>
        </section>
        <section id="complete-details" className="actives">
            <div id="order-number">
                <h3>Order Number</h3>
                <span>#256894</span>
            </div>

            <section id="my-two-box">
                <section id="section-for-part1">
                    <div id="your-order-details">
                        <table>
                            <thead>
                                <tr>
                                    <td>Items summary</td>
                                    <td>Qty</td>
                                    <td>Price</td>
                                    <td>Total Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="img-row">
                                            <img src="img/products/f1.jpg" alt=""/>
                                            <p>Astronaut T-Shirts</p>
                                        </div>
                                    </td>
                                    <td className="other-rows">x1</td>
                                    <td className="other-rows">$139</td>
                                    <td className="other-rows">$139.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="img-row">
                                            <img src="img/products/f2.jpg" alt=""/>
                                            <p>Astronaut T-Shirts</p>
                                        </div>
                                    </td>
                                    <td className="other-rows">x2</td>
                                    <td className="other-rows">$139</td>
                                    <td className="other-rows">$278.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="img-row">
                                            <img src="img/products/f3.jpg" alt=""/>
                                            <p>Astronaut T-Shirts</p>
                                        </div>
                                    </td>
                                    <td className="other-rows">x3</td>
                                    <td className="other-rows">$139</td>
                                    <td className="other-rows">$379.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="second-table">
                        <table id="table2">
                            <thead>
                                <tr>
                                    <td>Customer And Order Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Customer Name</strong></td>
                                    <td>Faizan Talikot</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone Number</strong></td>
                                    <td>7918881829</td>
                                </tr>
                                <tr>
                                    <td><strong>Bag Option</strong></td>
                                    <td>No Bag</td>
                                </tr>
                                <tr>
                                    <td><strong>Type</strong></td>
                                    <td>Delivery</td>
                                </tr>
                                <tr>
                                    <td><strong>Note</strong></td>
                                    <td>N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="section-for-part2">
                    <div className="rider-details">
                        <p>Rider Details</p>
                        <div className="track-rider">
                            <img src="img/ogrider.jpg" alt=""/>
                            <h4>Robert Suvent</h4>
                            <button>Track Rider</button>
                        </div>
                    </div>

                    <div className="order-summary">
                        <div className="order-summary-h4">
                            <p>Order summary</p>
                            <span>On The Way</span>
                        </div>
                        <div className="order-summary-table">
                            <table>
                              <tbody>
                                <tr>
                                    <td><strong>Order Created</strong></td>
                                    <td>Sun,May 7,2021</td>
                                </tr>
                                <tr>
                                    <td><strong>Order Time</strong></td>
                                    <td>06:24 AM</td>
                                </tr>
                                <tr>
                                    <td><strong>Subtotal</strong></td>
                                    <td>$139.00</td>
                                </tr>
                                <tr>
                                    <td><strong>Delivery Fee</strong></td>
                                    <td>$10.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="only-total-box">
                        <p><strong>Total</strong></p>
                        <span>$139.00</span>
                    </div>

                    <div className="delivery-details">
                        <h3>Delivery Address</h3>
                        <div className="address-line">
                            <p><strong>Address line : </strong></p>
                            <span>14 Anglesey Road</span>
                        </div>
                        <div className="address-line">
                            <p><strong>Flat / Building Name : </strong></p>
                            <span>James Court</span>
                        </div>
                        <div className="address-line">
                            <p><strong>Street Name : </strong></p>
                            <span>Anglesey Road</span>
                        </div>
                        <div className="address-line">
                            <p><strong>Postcode : </strong></p>
                            <span>En3 4hy</span>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </section> */}

    <Footer/>
    </div>
  )
}

export default Yourorders
