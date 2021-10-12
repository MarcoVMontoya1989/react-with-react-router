import React from 'react';
import {useParams} from "react-router-dom";

const ProductDetailComponent = () => {

  const params = useParams();

  console.log(params.productId)

  return (
    <section>
      <h1>Product Detail</h1>
      <span>product detail: {params.productId}</span>
    </section>
  );
};

export default ProductDetailComponent;