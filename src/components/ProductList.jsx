import React, { useState, useEffect } from "react";
import useGetProduct from "../hooks/useGetProduct";
import ProductItem from "./ProductItem";
import '@styles/ProductList.scss';
const ProductList = () => {
  const axios = require('axios');
  
  let data = JSON.stringify({
    "numPag": 1
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://keen-napier.68-168-208-58.plesk.page/api/ProductoGral/GetProductos',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  

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
