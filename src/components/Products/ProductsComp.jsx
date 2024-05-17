import React, { useEffect, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { productSlice } from "../../Redux/ProductSlice";

const ProductsComp = () => {
  const [products, setPro] = useState([]);
  const dispatch =useDispatch();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setPro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <section className="products">
      <div className="header">
        <h2>Exclusive Products</h2>
      </div>
      <ul className="sections-brand">
        <li>
          <Link>New Arrival</Link>
        </li>
        <li>
          <Link>Best Sellers</Link>
        </li>
        <li>
          <Link>Featured</Link>
        </li>
        <li>
          <Link>Special Offer</Link>
        </li>
      </ul>
      <div className="container-pro">
        {products?.map((el, id) => (
          <div class="card" key={id}>
            <div class="card-img">
              <img src={el.image} alt="" />
            </div>
            <div class="card-info">
              <p class="text-title">{el.title}</p>
              <p class="text-body">{el.category}</p>
            </div>
            <div class="card-footer">
              <span class="text-price">${el.price}</span>
              <div class="card-button">
                <GiShoppingCart size={30} className="cart" onClick={()=>dispatch(productSlice.actions.addToCart(el))} />
              </div>
            </div>
            <span className="read"><Link to={`${el.id}`}>Read More</Link></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsComp;
