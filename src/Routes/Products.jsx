import React, { Fragment } from 'react'
import HeaderComp from '../components/Header/HeaderComp'
import ProductsComp from '../components/Products/ProductsComp'
import Footer from "../components/footer/Footer"

const Products = () => {
  return (
    <Fragment>
        <HeaderComp/>
        <ProductsComp/>
        <Footer/>
    </Fragment>
  )
}

export default Products
