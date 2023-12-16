import React from 'react';
import { ProductCarts } from './ProductCarts';
import '../styles/ProductList.css';

export function ProductList({products}) {

  return (
  <div className='ProductList-container'>
    {products ? (
      products.map((product) => (
        <ProductCarts key={product.id} product={product} />
      ))
    ) : (
      <div>Cargando...</div>
    )}
  </div>
  )
}
