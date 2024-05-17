import React, { Fragment } from 'react'
import HeaderComp from "../components/Header/HeaderComp"
import ContactUsComp from '../components/conteatUs/ContactUsComp'
import Footer from '../components/footer/Footer'

const ContactUs = () => {
  return (
    <Fragment>
    <HeaderComp/>
    <ContactUsComp/>
    <Footer/>  
    </Fragment>
  )
}

export default ContactUs
