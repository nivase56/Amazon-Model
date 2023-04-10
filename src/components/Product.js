import React from "react";
import "./Product.css";

const Product = ({ title, price, rating, img, id }) => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">₹{price}</p>
          <div className="product__rating">⭐⭐⭐</div>
        </div>
        <img src={img} alt="product" />
        <button>Add Cart</button>
      </div>
    </div>
  );
};

export default Product;
