import React, { useEffect, useState, useRef } from "react";
import slide from "./slide.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { productSlice } from "../../Redux/ProductSlice";

const SlideComp = () => {
  const [products, setPro] = useState([]);
  const sliderRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setPro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <motion.div className={slide.main}>
      <div className={slide.header}>
        <h2>Featured Products</h2>
      </div>
    <motion.section ref={sliderRef} className={slide.slider}>
      <motion.div
        drag="x"
        dragConstraints={{ right:0 ,}}
        className={slide.container_pro}
      >
        {products?.map((el, id) => (
          <motion.div class={slide.card} key={id}>
            <div class={slide.card_img}>
              <img src={el.image} alt="" />
            </div>
            <div class={slide.card_info}>
              <p class={slide.text_title}>{el.title}</p>
              <p class={slide.text_body}>{el.category}</p>
            </div>
            <div class={slide.card_footer}>
              <span class={slide.text_price}>${el.price}</span>
              <div class={slide.card_button}>
                <GiShoppingCart
                  size={30}
                  className={slide.cart}
                  onClick={() => dispatch(productSlice.actions.addToCart(el))}
                />
              </div>
            </div>
            <span className={slide.read}>
              <Link to={`${el.id}`}>Read More</Link>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    </motion.div>
  );
};

export default SlideComp;
