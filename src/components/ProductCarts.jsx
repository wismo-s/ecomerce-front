import { useState } from 'react'
import '../styles/ProductsCarts.css';
import { Link } from 'react-router-dom';
import { MotionButton } from './MotionButton';
import { motion, useAnimate } from 'framer-motion';

const url = 'http://127.0.0.1:8000/tienda'
export function ProductCarts({product}) {
    const finalPrice = (product.price - product.discount).toFixed(2);
    const discount = ((product.discount * 100)/product.price).toFixed(0);
    const [urlImg, setUrlImg] = useState(product.port_img)
    const [imgScope, animateImg] = useAnimate()

    const handleMouseEnter = () => {
        setUrlImg(product.firts_img)
        animateImg(imgScope.current, { scale: [0.9, 1], opacity: [0, 1]})
    }
    const handleMouseLeave = () => {
        setUrlImg(product.port_img)
        animateImg(imgScope.current, { scale: [0.9, 1], opacity: [0, 1]})
    }

  return (
      <motion.article className='ProductCarts-container' animate={{opacity:[0, 1], y:[80,0]}}>
            <div className='ProductCarts-container_img'>
                <img ref={imgScope} src={url+urlImg} alt={product.title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </div>
            <Link to={`/productos/${product.slug}`}>
            <div className='ProductCarts-container_info'>
                <h3 className='ProductCarts-title'>{product.title}</h3>
                <div className='ProductCarts-container_text'>
                    {
                        product.discount > 0 ? 
                        <div className='ProductCarts-container_price'>
                            <span>s/.{product.price}</span>
                            <p>s/.{finalPrice}</p>
                            <span className='ProductCarts_desc'>-{discount}%</span>
                        </div> : 
                        <p>s/.{product.price}</p>
                    }
                    <div className='ProductCarts-container_buton'>
                        <MotionButton className='ProductCarts_button' scaleHover={1.1}>VER</MotionButton>
                    </div>
                </div>
            </div>
            </Link>
        </motion.article>
  )
}
