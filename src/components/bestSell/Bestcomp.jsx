import React from 'react'
import img from '../../Images/tranding_img.png'
import best from "./best.module.css"

const Bestcomp = () => {
  return (
    <div className={best.main}>
    <div className={best.img}>
        <img src={img} alt='img'/>
    </div>
    <div className={best.best}>
    <div className={best.content_best}>
        <h5>New season trends!</h5>
        <h2>Best Summer Collection</h2>
        <p>Sale Get up to 50% Off</p>
        <button>Shop Now</button>
    </div>
    </div>
    </div>
  )
}

export default Bestcomp
