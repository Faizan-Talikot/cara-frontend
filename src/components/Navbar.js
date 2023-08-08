import React from 'react'
import { Link, useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import logo from "../img/logo.png";
import swal from 'sweetalert';

const Navbar = (props) => {
    const location = useLocation();
    let navigate = useNavigate();
    const handleLogout = ()=>{
      swal({
        title: "Are you sure?",
        text: "You will be logout!",
        icon: "warning",
        buttons:true,
        dangerMode:true,
    })
    .then((isOkay)=>{
      if(isOkay){
        localStorage.removeItem('token')
        navigate('./login')
      }
    });
    return false;
    }
    const {cartItems} = props;
    const myfun = ()=>{
      const close = document.getElementById("close");
     const nav = document.getElementById("navbar");
      if (close) {
          nav.classList.remove("active");
      }
    }
  return (
    <div>
      <section id="header">
        <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
        <div>
            <ul id="navbar">
                <li><Link className={location.pathname === "/" ? "active" : "" } to="/" onClick={myfun()}>Home</Link></li>
                <li><Link className={location.pathname === "/shop" ? "active" : "" } to="/shop">Shop</Link></li>
                <li><Link className={location.pathname === "/blog" ? "active" : "" } to="/blog">Blog</Link></li>
                <li><Link className={location.pathname === "/about" ? "active" : "" } to="/about">About</Link></li>
                <li><Link className={location.pathname === "/contact" ? "active" : "" } to="/contact">Contact</Link></li>
                <li><Link className={location.pathname === "/yourOrders" ? "active" : "" } to="/yourOrders">Your orders</Link></li>
                <li id="lg-bag"><Link className={location.pathname === "/cart" ? "active" : "" } to="/cart"><i className="lni lni-shopping-basket"></i><span id="spans"
                    style={{padding:"3px"}}>{cartItems.length === 0? "0":cartItems.length}</span></Link></li>
                <Link to="#" id="close"><i className="lni lni-close"></i></Link>

                {!localStorage.getItem('token')?<>
        <li><Link to="/login" role="button" className={location.pathname === "/login" ? "active" : ""}  style={{backgroundColor: "#088178",
           color:" white",border: "0.5px",padding:" 4px",borderRadius: "5px",fontSize:"13px"}}>Login</Link></li><li>
        <Link className={location.pathname === "/signup" ? "active" : "" } to="/signup" role="button" style={{backgroundColor: "#088178",
           color:" white",border: "0.5px",padding:" 4px",borderRadius: "5px",fontSize:"13px"}}>SignUp</Link>
      </li></>:<button onClick={handleLogout} className="btn"  style={{backgroundColor: "#088178",
           color:" white",border: "0.5px",padding:" 8px",borderRadius: "5px"}}>LogOut</button>}
           
            </ul> 
        </div>
        <div id="mobile">
            <Link to="/cart"><i className="lni lni-shopping-basket"></i><span id="spaned">{cartItems.length === 0? "0":cartItems.length}</span></Link>
            <i id="bar" className="lni lni-menu" onClick={props.hamburger}></i>
        </div>
    </section>
    </div>
  )
}

export default Navbar
