import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductState from "./context/products/productState";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Yourorders from "./components/Yourorders";
import Cart from "./components/Cart";
import Specificproduct from "./components/Specificproduct";
import data from "./components/Data/Data";
import { useState } from "react";
import Checkout from "./components/Checkout";
import swal from 'sweetalert';
import Signup from "./components/Signup";
import Login from "./components/Login"
import Adminpage from "./components/Adminpage" 

// hamburger Javascript
function hamburger(){

  const close = document.getElementById("close");
  const nav = document.getElementById("navbar");
  
    
      nav.classList.add("active");
      console.log("clicked")

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
      console.log("removed")
    });
  }
}

// member alert Javascript

// fading effect Javascript
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 15;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}

function App() {
  const { productItems , productItems2 } = data;
  const [cartItems, setCartItems] = useState([]);


  // hamburger();
  const handleAddProduct = (image, name, price, id) => {
    console.log(id);
    
    console.log("before", cartItems);
    const productExist = cartItems.find((item) => item.id === id);

    console.log("productExists", productExist);
    if (productExist) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...productExist, quantity: productExist.quantity + 1 } : item)));
      localStorage.setItem("cartItem",JSON.stringify(cartItems))
      swal({
        title: "Product Quantity increased",
        // text: "please fill the missing fields!",
        icon: "success",
    });
    } else {
      setCartItems([...cartItems, { image, name, price, id, quantity: 1 }]);
      console.log(cartItems);
      localStorage.setItem("cartItem",JSON.stringify(cartItems))
      swal({
        title: "Product Added",
        // text: "please fill the missing fields!",
        icon: "success",
    });
    }
    if(document.getElementById('select').value){
      let size = document.getElementById('select').value
      localStorage.setItem("size",size)
    }  
    
  };

  const handleRemoveProduct = (image, name, price, id) => {
    const productExist = cartItems.find((item) => item.id === id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { image, name, price,id, quantity: productExist.quantity - 1 } : item)));
    }
  };

  const calprice = (price, quantity) => {
    return price * quantity;
  };


  
  const totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  

  const applyCoupon = ()=>{
    let couponcode1 = document.querySelector('.couponcode');
        let message = document.querySelector('.message');
        let wrongmessage = document.querySelector('.messageforwrong');
        let cartempty = document.querySelector('.cartempty');
    let couponcode = document.querySelector(".couponcode").value;
    if (cartItems.length !== 0) {
        if (couponcode === "faizanisbest10%") {
          couponcode = document.querySelector(".couponcode").value = "";
          message.classList.remove("message");
          message.classList.add("hiddenforcoupon");
          couponcode1.classList.remove("couponcode");
          couponcode1.classList.add("border");
          // localStorage.setItem('discount' , )
          // wrongmessage.classList.remove('messageforwrong');
          setTimeout(() => {
            message.classList.add("message");
            message.classList.remove("hiddenforcoupon");
            couponcode1.classList.add("couponcode");
            couponcode1.classList.remove("border");
          }, 3000);
          if (cartItems.length !== 0) {
            
            let couponCost = document.getElementById('costaftercoupon');
            let couponamount = document.getElementById('valueofdiscount');
           let  discountedcost = totalprice - 39;
            couponCost.innerHTML = '$ ' + discountedcost + '.00';
            couponamount.innerHTML = '$39'
          }
        } else {
          wrongmessage.classList.remove("messageforwrong");
          wrongmessage.classList.add("hiddenforcoupon1");
          couponcode1.classList.remove("couponcode");
          couponcode1.classList.add("border1");
          setTimeout(() => {
            wrongmessage.classList.add("messageforwrong");
            wrongmessage.classList.remove("hiddenforcoupon1");
            couponcode1.classList.add("couponcode");
            couponcode1.classList.remove("border1");
          }, 3000);
        }
      } else {
        console.log("empty")
        cartempty.classList.remove("cartempty");
        cartempty.classList.add("hiddenforcoupon1");
        couponcode1.classList.remove("couponcode");
        couponcode1.classList.add("border1");
        setTimeout(() => {
          cartempty.classList.add("cartempty");
          cartempty.classList.remove("hiddenforcoupon1");
          couponcode1.classList.add("couponcode");
          couponcode1.classList.remove("border1");
        }, 3000);
      }
  }



  const resetcoupon = (price)=>{
    if(document.getElementById("costaftercoupon") && document.getElementById("valueofdiscount") && document.getElementById("totalcost").innerHTML){

      let couponCost = document.getElementById("costaftercoupon");
      let couponamount = document.getElementById("valueofdiscount");
      const totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
      let price1 = +price;
      let cummulative = totalprice + price1
      couponCost.innerHTML = "$"+ cummulative + ".00" ;
      couponamount.innerHTML = "$0.00";
      if(cartItems.length===0){
        couponCost.innerHTML = "$0.00"
      }
    }
  }

  

  const resetcoupon1 = (price)=>{
    if(document.getElementById("costaftercoupon") && document.getElementById("valueofdiscount") && document.getElementById("totalcost").innerHTML){

      let couponCost = document.getElementById("costaftercoupon");
      let couponamount = document.getElementById("valueofdiscount");
      const totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
      console.log(price)
      let price1 = +price;
      let cummulative = totalprice - price1
      couponCost.innerHTML = "$"+ cummulative + ".00" ;
      couponamount.innerHTML = "$0.00";
    }
  }

  const resetcoupon3 = (price,quantity)=>{
    if(document.getElementById("costaftercoupon") && document.getElementById("valueofdiscount") && document.getElementById("totalcost").innerHTML){

      let couponCost = document.getElementById("costaftercoupon");
      let couponamount = document.getElementById("valueofdiscount");
      const totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
      let price1 = +price;
      price1 = price1 * quantity
      let cummulative = totalprice - price1
      couponCost.innerHTML = "$"+ cummulative + ".00" ;
      couponamount.innerHTML = "$0.00";
    }
  }

  const deleteProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const checkouttotal = ()=>{
    if(document.getElementById('costaftercoupon')){

      let value = document.getElementById('costaftercoupon').innerHTML;
      return value;
    }
  }

  const handleplaceorder = ()=>{
    let name = document.querySelector('#name').value;
            let street = document.querySelector('#street').value;
            let city = document.querySelector('#city').value;
            let state = document.querySelector('#state').value;
            let pincode = document.querySelector('#pincode').value;
            let landmark = document.querySelector('#landmark').value;
            let address = document.querySelector('#address').value;


            let cartitems = cartItems.length;
           
            if (!name.length || !street.length || !city.length || !state.length || !pincode.length || !landmark.length || !address.length) {
                // console.log("error")
                swal({
                    title: "Fields Empty!",
                    text: "please fill the missing fields!",
                    icon: "warning",
                });
            }
            else if (cartitems === 0) {
                swal({
                    title: "Your Cart is Empty!",
                    text: "please select a product to buy!",
                    icon: "warning",
                });
            }
            else {
              document.querySelector('#name').value = ''
              document.querySelector('#street').value = ''
              document.querySelector('#city').value = ''
              document.querySelector('#state').value = ''
              document.querySelector('#pincode').value = ''
              document.querySelector('#landmark').value = ''
              document.querySelector('#address').value = ''
                swal({
                    title: "Order Placed",
                    text: "Thankyou for trusting us",
                    icon: "success",
                });
                setCartItems([]);
            }
            
  }
  return (
    <>
      <ProductState>
        <Router>
          <Navbar cartItems={cartItems} hamburger={hamburger} />

          <Routes>
            <Route exact path="/" element={<Home productItems={productItems} handleAddProduct={handleAddProduct} productItems2={productItems2}/>} />
            <Route exact path="/shop" element={<Shop productItems={productItems} productItems2={productItems2} />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/yourOrders" element={<Yourorders />} />

            <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} deleteProduct={deleteProduct} calprice={calprice} applyCoupon={applyCoupon} resetcoupon={resetcoupon} resetcoupon1 = {resetcoupon1} totalprice={totalprice} resetcoupon3={resetcoupon3}/>} />

            <Route exact path="/specificproduct" element={<Specificproduct handleAddProduct={handleAddProduct} />} />

            <Route exact path="/checkout" element={<Checkout cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} deleteProduct={deleteProduct} calprice={calprice} applyCoupon={applyCoupon} resetcoupon={resetcoupon} resetcoupon1 = {resetcoupon1} resetcoupon3={resetcoupon3} checkouttotal={checkouttotal} value={true} handleplaceorder={handleplaceorder}/>} />
            <Route exact path="/Adminpage" element={<Adminpage/>}/>
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/login" element={<Login/>} />
          </Routes>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
