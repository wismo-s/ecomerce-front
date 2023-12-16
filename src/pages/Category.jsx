import React from 'react'
import { useCategoryDetails } from '../hooks/useCategoryDetails'
import { ProductList } from '../components/ProductList'

export function Category() {
    const category = useCategoryDetails()
  return (
    <div>
        <h1>{category.category}</h1>
        <ProductList products={category.products}/>
    </div>
  )
}
