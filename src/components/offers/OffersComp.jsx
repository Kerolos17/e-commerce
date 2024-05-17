import React from 'react'
import { Link } from 'react-router-dom'
import img1 from    "../../Images/shop_banner_img1.jpg"
import img2 from    "../../Images/shop_banner_img2.jpg"
import './offers.css'

const OffersComp = () => {
  return (
    <section className='offer-section'>
    <div className='container'>
        <div className='card1'>
            <img src={img1} alt='shop panner'/>
            <div className='text-contant'>
            <h5>Super Sale</h5>
            <h3>New Collection</h3>
            <Link>Shop Now</Link>
            </div>
        </div>
        <div className='card2'>
            <img src={img2} alt='shop banner'/>
            <div className='text-contant'>
            <h3>New Season</h3>
            <h4>Sale 40% Off</h4>
            <Link>Shop Now</Link>
            </div>
        </div>
    </div>
    </section>
  )
}

export default OffersComp
