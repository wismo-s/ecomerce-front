import { useRef } from 'react'
import { ProductList } from '../components/ProductList'
import { useProducts } from '../hooks/useProducts';
import { motion, useScroll, useTransform,  } from 'framer-motion';
import '../styles/Home.css';

export function Home() {
  const products = useProducts();
  const seccionref = useRef(null);
  const imgref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: seccionref, 
    offset: ["0 1", "0 0.4"]
  });
  const scroll = useScroll({
    target: imgref, 
    offset: ["0 1", "0 0.5"]
  });

  return (
    <div>
      <ProductList products={products}/>
      <div className='seccion-container'>
        <motion.section ref={seccionref} className='seccion-container_slide slide1'
        style={{
          translateX: useTransform(scrollYProgress, [0, 1], [-800, 0]),
          rotate: useTransform(scrollYProgress, [0, 1], [90, 0]),
        }}
        >
          <div>
            <h2>COLORANTES</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit fuga voluptatibus id atque vero vitae architecto fugiat mollitia? Repellat odio officia, voluptatum debitis officiis alias adipisci at amet fugit.</p>
          </div>
        </motion.section>
        <motion.section className='seccion-container_slide slide2'
        style={{
          translateX: useTransform(scrollYProgress, [0, 1], [800, 0]),
          rotate: useTransform(scrollYProgress, [0, 1], [-90, 0]),
        }}>
          <div className='seccion-slide_2'>
            <h2>ESENCIAS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit fuga voluptatibus id atque vero vitae architecto fugiat mollitia? Repellat odio officia, voluptatum debitis officiis alias adipisci at amet fugit.</p>
          </div>
        </motion.section>
      </div>
      <motion.div ref={imgref} className='overimage-container' style={{
          translateY: useTransform(scroll.scrollYProgress, [0, 1], [500, 0]),
        }}>
        <div className='img-container'>
          <img src="" alt="" />
        </div>
        <div className='info-container' >
          <h2>SOBRE NOSOTROS</h2>
          <motion.ul className='info-container_ul' >
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>            
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>   
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>            
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis distinctio tempora alias fugit eius, eum nulla expedita est voluptate veniam quo veritatis et autem nostrum quae dolor obcaecati dignissimos.</li>          
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}
