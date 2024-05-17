import React, { Fragment } from 'react'
import HeaderComp from "../components/Header/HeaderComp"
import Footer from "../components/footer/Footer"
import Cart from '../components/Products/Cart'

const CartComp = () => {
  return (
    <Fragment>
    <HeaderComp/>
    <Cart/>
    <Footer/>
    </Fragment>
  )
}

export default CartComp
