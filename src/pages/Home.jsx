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
          <div className='seccion-container_img smoke-red'>
            <motion.img drag dragConstraints={{top: -10, left: -10, right: 10, bottom: 10,}} whileHover={{scale: 1.1}} whileTap={{scale:0.9}} src="src/assets/img/red-smoke.webp" alt="red-smoke" />
          </div>
          <div className='seccion-text'> 
            <h2>COLORANTES</h2>
            <p>Descubre la magia de los colorantes alimenticios en nuestra amplia gama de productos que transformarán tus creaciones culinarias en obras maestras visuales. Encontrarás una paleta vibrante de colores que no solo deleitarán tu paladar, sino que también despertarán tus sentidos.</p>
          </div>
        </motion.section>
        <motion.section className='seccion-container_slide slide2'
        style={{
          translateX: useTransform(scrollYProgress, [0, 1], [800, 0]),
          rotate: useTransform(scrollYProgress, [0, 1], [-90, 0]),
        }}>
          <div className='seccion-container_img helado'>
            <motion.img drag dragConstraints={{top: -10, left: -10, right: 10, bottom: 10,}} whileHover={{scale: 1.1}} whileTap={{scale:0.9}} src="src/assets/img/helado.webp" alt="helado" />
          </div>
          <div className='seccion-text seccion-slide_2'>
            <h2>ESENCIAS</h2>
            <p>En cada gota, encontrarás el secreto para realzar el sabor y aromatizar tus creaciones culinarias como nunca antes.Nuestras esencias, cuidadosamente elaboradas con ingredientes naturales y seleccionados, ofrecen una amplia variedad de opciones, desde las clásicas hasta las más innovadoras</p>
          </div>
        </motion.section>
      </div>
      <motion.div ref={imgref} className='overimage-container' style={{
          translateY: useTransform(scroll.scrollYProgress, [0, 1], [400, 0]),
        }}>
        <div className='img-container'>
          <img src="src/assets/img/about-us.webp" alt="about-us" />
        </div>
        <div className='info-container' >
          <h2>SOBRE NOSOTROS</h2>
          <motion.ul className='info-container_ul' >
            <li>En nuestro empeño por ser líderes de la industria, invertimos en investigación y desarrollo para traer las últimas tendencias en colorantes y esencias.</li>            
            <li>Nuestros colorantes y esencias son seleccionados cuidadosamente para garantizar su pureza, frescura y sabor incomparable.</li>   
            <li>Fundada hace más de una década, nuestra misión es elevar la experiencia culinaria de cada hogar y negocio.</li>            
            <li> Al elegir nuestros colorantes y esencias, no solo está eligiendo calidad, sino también un compromiso con un futuro más sostenible y consciente.</li>          
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}
