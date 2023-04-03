import React, { useState, useEffect } from "react";
import useGetProduct from "../hooks/useGetProduct";
import ProductItem from "./ProductItem";
import '@styles/ProductList.scss';
const ProductList = () => {
    const API = "https://fakestoreapi.com/products";

    const data = useGetProduct(API)

  return (
    <section className="main-container">
      <div className="card-container">
        {data.map((item) => {
          return <ProductItem  key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
