import React from 'react';
import {Link} from 'react-router-dom';

const ProductsComponent = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to={'/product-detail/p1'}>
            Product No. 1 => Kamasutra book
          </Link>
        </li>
        <li>
          <Link to={'/product-detail/p2'}>
            Product No. 2 => BSDM book
          </Link>
        </li>
        <li>
          <Link to={'/product-detail/p3'}>
            Product No. 3 => Hentai book
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ProductsComponent;