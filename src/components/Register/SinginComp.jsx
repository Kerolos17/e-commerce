import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./register.css"


const SinginComp = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [user , setUser] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password',  password);
    setUser({email,password});
    user? window.location = '/': window.location = '/register';
  }
  return (
    <section className="register">
     <form>
     <h2>Singin</h2>
        <input type="email" placeholder="Enter Your Email" value={email}
        onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Your Password" value={password}
        onChange={e=>setPassword(e.target.value)} />
        <input className='btn' type="submit" value="Sign In" 
        onClick={handleSubmit} />
        <div className="check">
          <input type="checkbox" />
          <span>Remember me.</span>
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
            <span>Don't Have an Account?</span>
            <Link to="/register">Sign Up Now</Link>
        </div>
      </form>
     
    </section>
  );
};

export default SinginComp;
