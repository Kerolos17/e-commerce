import React, { Fragment } from 'react'
import SinginComp from '../components/Register/SinginComp'
import HeaderComp from '../components/Header/HeaderComp'
import Footer from '../components/footer/Footer'

const loginComp = () => {
  return (
    <Fragment>
        <HeaderComp/>
        <SinginComp/>
        <Footer/>
    </Fragment>
  )
}

export default loginComp
