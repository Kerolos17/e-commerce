import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoSync } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import singleProduct from "./singleproduct.module.css";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [star, setStar] = useState(false);
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [heart, setHeart] = useState(false);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  });
  const handleHeart = () => {
    setHeart(!heart);
  };
  const handleStar = () => {
    setStar(!star);
  };
  const handleStar1 = () => {
    setStar1(!star1);
  };
  const handleStar2 = () => {
    setStar2(!star2);
  };
  const handleStar3 = () => {
    setStar3(!star3);
  };
  const handleStar4 = () => {
    setStar4(!star4);
  };
  return (
    <Fragment>
      <section className={singleProduct.singlePro}>
        {product && (
          <div className={singleProduct.single_product}>
            <div className={singleProduct.img_pro}>
              <img src={product.image} alt="" />
            </div>
            <div className={singleProduct.info_pro}>
              <div className={singleProduct.rating}>
                <div className={singleProduct.star_icon}>
                  <CiStar
                    size={25}
                    className={singleProduct.star}
                    onClick={handleStar}
                    style={
                      star
                        ? { backgroundColor: "gold", color: "#fff" }
                        : undefined
                    }
                  />
                  <CiStar
                    size={25}
                    className={singleProduct.star}
                    onClick={handleStar1}
                    style={
                      star1
                        ? { backgroundColor: "gold", color: "#fff" }
                        : undefined
                    }
                  />
                  <CiStar
                    size={25}
                    className={singleProduct.star}
                    onClick={handleStar2}
                    style={
                      star2
                        ? { backgroundColor: "gold", color: "#fff" }
                        : undefined
                    }
                  />
                  <CiStar
                    size={25}
                    className={singleProduct.star}
                    onClick={handleStar3}
                    style={
                      star3
                        ? { backgroundColor: "gold", color: "#fff" }
                        : undefined
                    }
                  />
                  <CiStar
                    size={25}
                    className={singleProduct.star}
                    onClick={handleStar4}
                    style={
                      star4
                        ? { backgroundColor: "gold", color: "#fff" }
                        : undefined
                    }
                  />
                </div>
                <div className={singleProduct.rate_text}>{product.rating.rate}</div>
              </div>
              <div className={singleProduct.title}>
                <h3>{product.title}</h3>
              </div>
              <div className={singleProduct.price}>
                <h3>
                  <span>price:</span> ${product.price}
                </h3>
              </div>
              <div className={singleProduct.cart_pro}>
                <button className={singleProduct.cart_btn} >Add to Cart</button>
                <div
                  className={singleProduct.heart}
                  style={
                    heart
                      ? { backgroundColor: "#FF3550", color: "#fff" }
                      : undefined
                  }
                >
                  <FaRegHeart onClick={handleHeart} size={25} />
                </div>
              </div>
              <hr className={singleProduct.line} />
              <div className={singleProduct.description}>
                <h3>Description</h3>
                <p>{product.description}</p>
                <hr className={singleProduct.line} />
                <div className={singleProduct.data}>
                <span>
                  {" "}
                  <IoShieldCheckmarkOutline size={20} className={singleProduct.icon}/>{" "}
                  <>1 Year AL Jazeera Brand Warranty</>{" "}
                </span>
                <span>
                  <IoSync size={20} className={singleProduct.icon}/>{" "}
                  <>30 Day Return Policy</>
                </span>
                <span>
                  <FaSackDollar size={20} className={singleProduct.icon}/>{" "}
                  <>Cash on Delivery available</>
                </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default SingleProduct;
