import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import footer from "./footer.module.css"
import { FaFacebookF, FaLinkedinIn, FaTwitter  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";

const Footer = () => {
  return (
    <Fragment>
	<div className={footer.head_footer}>
	<h2>Subscribe Our Newsletter</h2>
	<div className={footer.sub}>
	    <input className={footer.input} type="text" placeholder="Enter your email"/>
		<button className={footer.btn}>Subscribe</button>
	</div>
  </div>
  <footer className={footer.footer}>

  	 <div className={footer.container}>
  	 	<div className={footer.row}>
  	 		<div className={footer.footer_col}>
  	 			<h4><span><GiShoppingCart size={20}/></span> shopWise</h4>
  	 			<ul>
  	 				<li><Link className={footer.link} to="/">Home</Link></li>
  	 				<li><Link className={footer.link}>Pages</Link></li>
  	 				<li><Link className={footer.link}>Products</Link></li>
  	 				<li><Link className={footer.link}>Blog</Link></li>
  	 				<li><Link className={footer.link}>Contact Us</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className={footer.footer_col}>
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link className={footer.link}>FAQ</Link></li>
  	 				<li><Link className={footer.link}>shipping</Link></li>
  	 				<li><Link className={footer.link}>returns</Link></li>
  	 				<li><Link className={footer.link}>order status</Link></li>
  	 				<li><Link className={footer.link}>payment options</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className={footer.footer_col}>
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><Link className={footer.link}>watch</Link></li>
  	 				<li><Link className={footer.link}>bag</Link></li>
  	 				<li><Link className={footer.link}>shoes</Link></li>
  	 				<li><Link className={footer.link}>dress</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className={footer.footer_col}>
  	 			<h4>follow us</h4>
  	 			<div className={footer.social_links}>
  	 				<Link className={footer.link}><FaFacebookF  size={25} /></Link>
  	 				<Link className={footer.link}><FaInstagram  size={25} /></Link>
  	 				<Link className={footer.link}><FaLinkedinIn size={25} /></Link>
  	 				<Link className={footer.link}><FaTwitter    size={25} /></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </Fragment>
  )
}

export default Footer
