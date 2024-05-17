import React, { Fragment } from 'react'
import HeaderComp from '../components/Header/HeaderComp'
import Footer from '../components/footer/Footer'
import LandingComp from '../components/landing/LandingComp'
import OffersComp from '../components/offers/OffersComp'
import ProductsComp from '../components/Products/ProductsComp'
import Bestcomp from '../components/bestSell/Bestcomp'
import SlideComp from '../components/slider/SlideComp'


const HomeComp = () => {
  return (
    <Fragment>
        <HeaderComp/>
        <LandingComp/>
        <OffersComp/>
        <ProductsComp/>
        <Bestcomp/>
        <SlideComp/>
        <Footer/>
    </Fragment>

  )
}

export default HomeComp
