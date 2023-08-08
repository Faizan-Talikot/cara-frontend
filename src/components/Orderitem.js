import React from 'react'
import ogrider from "../img/ogrider.jpg"

const Orderitem = (props) => {
  const {orders,index,e} = props;
  let neworder= orders.slice(index,index+1)
//   console.log(neworder)

  return (
    <div>
       <section id="complete-details" className={orders.length===0?"actives":""} >
            <div id="order-number">
                <h3>Order Number</h3>
                <span>{e._id.slice(0,10)}</span>
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
                            {neworder.map(i => i.cartItems.map((item,index) =>
                             
                             <tr key={index}>
                         <td style={{display:"flex",alignItems:"center"}}>
                         <img src={item.image} alt="" style={{height: "63px"}}/>
                         <span style={{marginLeft:"5px"}}>{item.name}</span>
                         </td>
                         {/* <td></td> */}
                         <td>{item.quantity}</td>
                         {/* <td><input type="number" defaultValue={item.quantity} /></td> */}
                         
                         <td>${item.price}.00</td>
                         
                         <td>${item.price * item.quantity}.00</td>
                         </tr>))}
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
                                    <td>{e.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone Number</strong></td>
                                    <td>{e.landmark}</td>
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
                            <img src={ogrider} alt=""/>
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
                                    <td>{e.date.slice(0,10)}</td>
                                </tr>
                                {/* <tr>
                                    <td><strong>Order Time</strong></td>
                                    <td>06:24 AM</td>
                                </tr> */}
                            
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="only-total-box">
                        <p><strong>Total</strong></p>
                        <span>{e.total}</span>
                    </div>

                    <div className="delivery-details">
                        <h3>Delivery Address</h3>
                        <div className="address-line">
                            <span><strong>Address: </strong></span>
                            <span>{e.address}</span>
                        </div>
                        <div className="address-line">
                            <p><strong>City : </strong></p>
                            <span>{e.city}</span>
                        </div>
                        <div className="address-line">
                            <p><strong>Street Name : </strong></p>
                            <span>{e.street}</span>
                        </div>
                        <div className="address-line">
                            <p><strong>State : </strong></p>
                            <span>{e.state}</span>
                        </div>
                        <div className="address-line">
                            <p><strong>Postcode : </strong></p>
                            <span>{e.pincode}</span>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </div>
  )
}

export default Orderitem



// {cartItems1.map((item) => (
    
//     <tr key={item.id}>
      
//       <td>
//         <img src={item.image} alt="" />
//       </td>
//       <td>{item.name}</td>
//       <td>${item.price}.00</td>
//       {/* <td><input type="number" defaultValue={item.quantity} /></td> */}

//       <td>{item.quantity}</td>

//       <td>$.00</td>
//     </tr>
//   ))}





// {orders.map(i => i.cartItems.map((item,index) =>
                             
//     <tr key={item.id}>
// <td style={{display:"flex",alignItems:"center"}}>
// <img src={item.image} alt="" style={{height: "63px"}}/>
// <span style={{marginLeft:"5px"}}>{item.name}</span>
// </td>
// {/* <td></td> */}
// <td>{item.quantity}</td>
// {/* <td><input type="number" defaultValue={item.quantity} /></td> */}

// <td>{item.price}</td>

// <td>${item.total}.00</td>
// </tr>))}
