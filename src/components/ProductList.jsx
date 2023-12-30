import { ProductCarts } from './ProductCarts';
import '../styles/ProductList.css';

export function ProductList({products}) { 
  return (
  <section className='ProductList-container'>
    {products ? (
      products.map((product) => (
        <ProductCarts key={product.id} product={product} />
      ))
    ) : (
      <div>Cargando...</div>
    )}
  </section>
  )
}
