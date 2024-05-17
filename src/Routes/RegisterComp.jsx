import React, { Fragment } from 'react'
import HeaderComp from '../components/Header/HeaderComp'
import Footer from '../components/footer/Footer'
import Singupcomp from '../components/Register/Singupcomp'
const RegisterComp = () => {
  return (
    <Fragment>
        <HeaderComp/>
        <Singupcomp/>
        <Footer/>
    </Fragment>
  )
}

export default RegisterComp