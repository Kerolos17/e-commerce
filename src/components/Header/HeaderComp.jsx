import React, { Fragment, useEffect, useState } from "react";
import logo from "../../Images/logo_dark.png";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./header.css";
import { useSelector } from "react-redux";
const HeaderComp = () => {
  const [menu, setMenu] = useState(false);
  const [bigMenu,setBigMenu]  = useState(false);
  // const [loading, setLoading] = useState(true);
  const cartProduct = useSelector((state)=>state.product.items)
  useEffect(() => {
      window.addEventListener("resize", () => {
        window.innerWidth <= 850 ? setMenu(true):setMenu(false)
      });

  },[window.innerWidth])
  const changeMenu = () => {
    setBigMenu(!bigMenu)
  };
  return (
    <Fragment>
      <header >
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <ul 
            className={bigMenu? 'bigMenu':undefined}
            style={menu ? { display: "none" } :{display:'flex'}} >
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className="sing">
                <NavLink to='/register'>Register <IoIosArrowDown/></NavLink>
                
                <ul className="regis">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to='/register'>singup</NavLink>
                </li>
                </ul>
              </li>
              <li>
                <NavLink to='/products'>Products </NavLink>
              </li>
              <li>
                <NavLink to='cart'>Shop </NavLink>
              </li>
              <li>
                <NavLink to="contactUs">Contact Us</NavLink>
              </li>
            </ul>
            <div className="icon">
              <span>
                <NavLink to='cart'><GiShoppingCart size={25} />{
                  cartProduct.length > 0? cartProduct.length : undefined
                }</NavLink>
              </span>
              <span>
                <IoIosSearch size={25} />
              </span>
            </div>
            {
              menu ? bigMenu ? <MdClose size={30} onClick={changeMenu}  className="burger-icon"/> :
               <RxHamburgerMenu size={30} onClick={changeMenu} className="burger-icon" /> :undefined

            }
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default HeaderComp;
