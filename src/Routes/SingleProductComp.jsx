import React, { Fragment } from 'react'
import HeaderComp from '../components/Header/HeaderComp'
import SingleProduct from '../components/singelProduct/SingleProduct'
import Footer from '../components/footer/Footer'

const SingleProductComp = () => {
  return (
    <Fragment>
    <HeaderComp/>
    <SingleProduct/>
    <Footer/>  
    </Fragment>
  )
}

export default SingleProductComp
