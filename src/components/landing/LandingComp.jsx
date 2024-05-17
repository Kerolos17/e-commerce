import React, { Fragment, useState } from 'react'
import "./landing.css"
import img1 from "../../Images/landing-img/banner1.jpg"
import img2 from "../../Images/landing-img/banner2.jpg"
import img3 from "../../Images/landing-img/banner3.jpg"

const LandingComp = () => {
  const slideImages = [
    {
      img: img1,
      title:'Get up to 50% off Today Only!',
      description: 'Woman Fashion',
      button:'Shop Naw'
    },
    {
      img: img2,
      title:'50% off in all products',
      description: 'Man Fashion',
      button:'Shop Naw'
    },
    {
      img: img3,
      title:'Get up to 50% off Today Only!',
      description: 'Summer Sale',
      button:'Shop Naw'

    }
  ];
  const [slide,setSlide] = useState(0)
  const nextSlide = ()=>{
    setSlide (slide === slideImages.length - 1 ? 0 : slide + 1)
  };
  const privesSlide = ()=>{
    setSlide (slide === slideImages.length - 1 ? 0 : slide - 1)
  }
  return (
    <Fragment>
        <section className='slide-container'>
        <span onClick={privesSlide} className='left-arrow'> {`<`} </span>
              {slideImages.map((image, index) => (
                <div  className={slide === index ? "slide":"slide-hidden" } key={index}>
                <img alt='' src={image.img}/>
                <div className='text'>
                <span className='title'>
                    {slide === index ? `${image.title}`:undefined}
                  </span>
                  <h4 className='disc'>
                  {slide === index ? `${image.description}`:undefined}
                  </h4>
                  <button>
                  {slide === index ? `${image.button}`:undefined}
                  </button>
                </div>
                </div>
              ))}
              <span onClick={nextSlide} className='right-arrow'> {`>`} </span>
        </section>
    </Fragment>
  )
}

export default LandingComp
