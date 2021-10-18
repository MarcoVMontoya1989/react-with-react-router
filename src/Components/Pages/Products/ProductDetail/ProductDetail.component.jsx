import React from 'react';
import {useParams} from "react-router-dom";

const ProductDetailComponent = () => {
  const params = useParams();

  let productContent = (<span>{params.productId}</span>);

  return (
    <section>
      <h1>Product Detail</h1>
      <span>product detail: {productContent}</span>
    </section>
  );
};

export default ProductDetailComponent;