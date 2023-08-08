import React, { useState,useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Signup = (props) => {
  useEffect(()=>{
    let body =  document.querySelector("body");
    body.classList.add('login')
 })
 const togglepassword = ()=>{
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  togglePassword.classList.toggle('fa-eye-slash');
 }
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.cpassword) {
      const { name, email, password } = credentials;
      const response = await fetch("https://cara-api-3ekq.onrender.com/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      if (json.success) {
        //save the authtoken in local storage
        console.log(json.success)
        localStorage.setItem("token", json.authToken);
        swal({
            title: "Account Created Successfully",
            // text: "please fill the missing fields!",
            icon: "success",
        });
        navigate("/");
      } else {
        swal({
            title: "Email Already exists !!! Try with Signing up",
            // text: "please fill the missing fields!",
            icon: "warning",
        });
      }
    }
    else{
        swal({
            title: "Confirm Password does not match",
            // text: "please fill the missing fields!",
            icon: "warning",
        });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-2">
      {/* <h2 className="my-3">Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="text" onChange={onChange} aria-describedby="emailHelp" name="name" placeholder="Enter name" />
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text" style={{color:props.mode==='dark'?'white':'black',opacity: "0.8"}}>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required />
        </div>
        <div className="form-group my-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Re-Enter your Password" minLength={5} required />
        </div>
        <button type="submit" className="btn" style={{backgroundColor:props.mode==='light'?'#0d6efd':'#ffd700',color:props.mode==='light'?'white':'black'}}>
          Submit
        </button>
      </form> */}

<div className="center" style={{marginTop:"62px",backgroundColor: "#e3e6f3"}}>
      <h1>SignUp</h1>
      <form method="post" onSubmit={handleSubmit}>
      <div className="txt_field">
        <input type="text"  id="name" name="name" onChange={onChange} required />
          <span></span>
        <label style={{color:"black"}}>Enter name</label>
        </div>
        <div className="txt_field">
        <input type="text"  id="email" name="email" onChange={onChange} required autoComplete="username"/>
          <span></span>
        <label style={{color:"black"}}>Email address</label>
        </div>
        <div className="txt_field">
          <input type="password" id="password" minLength={5} onChange={onChange} name="password" required autoComplete="new-password"></input>
          <span></span>
          <label style={{color:"black"}}>Password</label>
          <i className="far fa-eye fa-eye-slash" id="togglePassword" style={{marginLeft: "-30px", cursor: "pointer"}} onClick={togglepassword}></i>
        </div>
        <div className="txt_field">
          <input type="password" id="cpassword" minLength={5} onChange={onChange} name="cpassword" required autoComplete="new-password"></input>
          <span></span>
          <label style={{color:"black"}}>Confirm Password</label>
        </div>
        <input type="submit" value="Login"></input>
        <div className="signup_link">
          Already a member? <Link to="../login">Login</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
