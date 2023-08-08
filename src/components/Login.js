import React, { useState,useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

const Login = (props) => {
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

    const[credentials,setCredentials] = useState({email:"", password:""})
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = credentials.email
        const password = credentials.password
        if(password==='admin' && email==='admin'){
          console.log('admin login');
          navigate("/Adminpage")
        }else{
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
            //save the authtoken in local storage
            localStorage.setItem('token',json.authToken);
            console.log(json.authToken)
            swal({
                title: "Logged In Successfully",
                // text: "please fill the missing fields!",
                icon: "success",
            });
            navigate("/");
          }
          else{
            swal({
                title: "Invalid Credentials",
                // text: "please fill the missing fields!",
                icon: "warning",
            });
          }
          }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <div className="mt-3">
      
      {/* <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" value={credentials.email}     placeholder="Enter email" />
          <small id="emailHelp" className="form-text" style={{color:props.mode==='dark'?'white':'black',opacity: "0.8"}}>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn my-3" style={{backgroundColor:props.mode==='light'?'#0d6efd':'#ffd700',color:props.mode==='light'?'white':'black'}}>
          Submit
        </button>
      </form> */}
      <div className="center" style={{marginTop:"62px",backgroundColor: "#e3e6f3"}}>
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="txt_field">
        <input type="text"  id="email" name="email" onChange={onChange} required value={credentials.email} />
          <span></span>
        <label style={{color:"black"}}>Email address</label>
        </div>
        <div className="txt_field">
          <input type="password" required id="password" value={credentials.password} onChange={onChange} name="password"></input>
          <span></span>
          <label style={{color:"black"}}>Password</label>
          <i className="far fa-eye fa-eye-slash" id="togglePassword" style={{marginLeft: "-30px", cursor: "pointer"}} onClick={togglepassword}></i>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login"></input>
        <div className="signup_link">
          Not a member? <Link to="../signup">Signup</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
