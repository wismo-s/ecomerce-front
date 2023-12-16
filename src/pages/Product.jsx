import React from 'react'
import { ProductDetail } from '../components/ProductDetail'
import { useProductsDetail } from "../hooks/useProductDetails"

export function Product() {
  const product = useProductsDetail()
  return (
    <div>
      {product.port_img === undefined ? <h1>Cargando...</h1> : 
        <ProductDetail productDetail={product}/>
      }
    </div>
  )
}
