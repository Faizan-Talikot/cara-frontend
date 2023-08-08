import React, { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
  const host = "https://cara-api-3ekq.onrender.com"
     
    const ordersInitial = []
    const [orders, setOrders] = useState(ordersInitial);

     //Get all Orders
     const getOrders = async ()=>{
      //API Call
      const response = await fetch(`${host}/api/orders/fetchallorders`, {
         method: "GET", 
         headers: {
           "Content-Type": "application/json",
           "auth-token": localStorage.getItem('token')
         }
       });
      const json = await response.json();
      console.log(json);
      setOrders(json);
     }


     // Add a Note
    const addOrder = async (name,street,city,state,pincode,landmark,address,total,cartItems)=>{
      //API Call
      const response = await fetch(`${host}/api/orders/addorder`, {
         method: "POST", 
         headers: {
           "Content-Type": "application/json",
           "auth-token": localStorage.getItem('token')
         },
         body: JSON.stringify({name,street,city,state,pincode,landmark,address,total,cartItems}),
       });
       const order = await response.json(); 
       setOrders(orders.concat(order))
       
     }
  
  return (
    <productContext.Provider value={{orders,getOrders,addOrder}}>
            {props.children}
    </productContext.Provider> 
  )
}

export default ProductState;
