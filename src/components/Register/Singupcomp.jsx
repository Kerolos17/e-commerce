import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./register.css";

const Singupcomp = () => {
  const[name,setName]= useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const[cpassword,setCpassword]= useState('');
  const [userInfo, setUserInfo] =useState({});
  const handleSingUp=(e)=>{
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password',  password);
    localStorage.setItem('cpassword',  cpassword);
    setUserInfo({
      name: name,
      email: email,
      password:  password,
      cpassword:  cpassword
    })
    if(userInfo){
      window.location = '/';
    }else{
      alert('Something went wrong');
    }
  }
  return (
    <section className="register">
      <form>
      <h2>Singup</h2>
        <input type="text" placeholder="Enter Your Name" required value={name}
        onChange={e=>setName(e.target.value)} />
        <input type="email" placeholder="Enter Your Email" required
        value={email}
        onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Your Password" required
        value={password}
        onChange={e=>setPassword(e.target.value)} 
         />
        <input type="password" placeholder="Confirm Password" required
        value={cpassword}
        onChange={e=>setCpassword(e.target.value)}
         />
        <input className="btn" type="submit" value="Sign Up" onClick={handleSingUp} />
        <div className="check">
          <input type="checkbox"/> I agree to terms & Policy.
        </div>
        <div className="icon">
          <button>
            <FaFacebookF size={20} />
            <span>Facebook</span>
          </button>
          <button>
            <TiSocialGooglePlus size={20} />
            <span>Google</span>
          </button>
        </div>
        <div className="chang">
          <span>Already have an account?</span>
          <Link to="/login">Sign In</Link>
        </div>
      </form>
    </section>
  );
};

export default Singupcomp;
