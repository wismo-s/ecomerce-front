import React from 'react'
import { ProductList } from '../components/ProductList'
import { useProducts } from '../hooks/useProducts';
import '../styles/Home.css';

export function Home() {
  const products = useProducts();
  return (
    <div>
      <ProductList products={products}/>
      <div className='seccion-container'>
        <div className='seccion-container_slide slide1'>
          <div>
            <h2>COLORANTES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit fuga voluptatibus id atque vero vitae architecto fugiat mollitia? Repellat odio officia, voluptatum debitis officiis alias adipisci at amet fugit.</p>
          </div>
        </div>
        <div className='seccion-container_slide slide2'>
          <div className='seccion-slide_2'>
            <h2>ESENCIAS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit fuga voluptatibus id atque vero vitae architecto fugiat mollitia? Repellat odio officia, voluptatum debitis officiis alias adipisci at amet fugit.</p>
          </div>
        </div>
      </div>
      <div className='overimage-container'>
        <div className='img-container'>
          <img src="" alt="" />
        </div>
        <div className='info-container'>
          <h2>SOBRE NOSOTROS</h2>
          <ul className='info-container_ul'>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>            
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>   
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>            
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>          
          </ul>
        </div>
      </div>
    </div>
  )
}
