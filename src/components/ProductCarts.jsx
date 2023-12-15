import { useState } from 'react'
import '../styles/ProductsCarts.css';

const url = 'http://127.0.0.1:8000/tienda'
export function ProductCarts({product}) {
    const finalPrice = product.price - product.discount;
    const discount = ((product.discount * 100)/product.price).toFixed(2);
    const [urlImg, setUrlImg] = useState(product.port_img)

    const handleMouseEnter = () => {
        setUrlImg(product.firts_img)
    }
    const handleMouseLeave = () => {
        setUrlImg(product.port_img)
    }
  return (
    <div className='ProductCarts-container'>
        <div className='ProductCarts-container_img'>
            <img src={`${url}${urlImg}`} alt={product.title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </div>
        <div className='ProductCarts-container_info'>
            <div className='ProductCarts-container_text'>
                <h3 className='ProductCarts-title'>{product.title}</h3>
                {
                    product.discount > 0 ? 
                    <div className='ProductCarts-container_price'>
                        <span>s/.{product.price}</span>
                        <p>s/.{finalPrice}</p>
                        <span className='ProductCarts_desc'>-{discount}%</span>
                    </div> : 
                    <p>s/.{product.price}</p>
                }
            </div>
            <div className='ProductCarts-container_buton'>
                <button className='ProductCarts_button'>comprar</button>
            </div>
        </div>
    </div>
  )
}
