import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCarts } from './ProductCarts';

export function ProductList() {
    const products = useProducts();

  return (
    <div>
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
