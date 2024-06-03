import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../../Redux/ProductSlice";

const Cart = () => {
  const [products, setProducts] = useState();
  const cartProduct = useSelector((state) => state.product.items);
  const Price = useSelector((state)=>state.product.total)
  const dispatch = useDispatch();
  useEffect(() => {
    setProducts(cartProduct);
    dispatch(productSlice.actions.CalcTotal())
  }, [cartProduct,dispatch]);
  return (
    <section className="products">
      <div className="header">
        <h2>Your Cart</h2>
        <div className="total">
          <h2>
            Total Cost:$ {Price}
          </h2>
        </div>
        <button
          className="cart-btn"
          onClick={() => dispatch(productSlice.actions.clearCart())}
        >
          Clear Cart
        </button>
      </div>
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
                <FaRegTrashAlt
                  size={30}
                  onClick={() =>
                    dispatch(productSlice.actions.removeFromCart(el))
                  }
                  className="cart"
                />
              </div>
            </div>
            <span className="read">
              <Link to={`${el.id}`}>Read More</Link>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
