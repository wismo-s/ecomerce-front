import '../styles/ProductDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopButton } from './ShopButton'
import { motion, useAnimate } from 'framer-motion'
export function ProductDetail({productDetail}) {
    const url = 'http://127.0.0.1:8000/tienda'
    const [img, setImg] = useState(url + productDetail.port_img)
    const [quantity, setQuantity] = useState(1)
    const [choise, setChoise] = useState(productDetail.choises[0].id)
    const [inputScope, animateInput] = useAnimate()
    const [imgScope, animateImg] = useAnimate()

    const HandleClick = (e) => {
        setImg(e.target.src)
        animateImg(imgScope.current, { scale: [1.2, 1], opacity: [0, 1]})
    }
    const HandleSelect = (e) => {
        setChoise(e.target.value)
    }
    const handleChange = (e) => {
        setQuantity(e.target.value)
        animateInput(inputScope.current, { scale: [1.05, 1], opacity: [0, 1]})
    }

    const finalPrice = (productDetail.price - productDetail.discount).toFixed(2);
    const discount = ((productDetail.discount * 100)/productDetail.price).toFixed(0);
    return (
        <div className="detail-container">
                    <motion.div className="image-container" animate={{x:[-300, 0]}}>
                        <div className="image-container_actual">
                            <img ref={imgScope} src={img} alt="" />
                        </div>
                        <div className="image-container_carrusel">
                            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <img src={url + productDetail.port_img} alt="" onClick={HandleClick} />
                            </motion.div>
                            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <img src={url + productDetail.firts_img} alt="" onClick={HandleClick} />
                            </motion.div>
                            {productDetail.second_img && (
                                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <img src={url + productDetail.second_img} alt="" onClick={HandleClick} />
                                </motion.div>
                            )}
                            {productDetail.third_img && (
                                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <img src={url + productDetail.third_img} alt="" onClick={HandleClick} />
                                </motion.div>
                            )}
                            {productDetail.four_img && (
                                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <img src={url + productDetail.four_img} alt="" onClick={HandleClick} />
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                    <motion.div className="product-detail-container" animate={{x:[300, 0]}}>
                        <div className="product-detail-container_title">
                            <h1>{productDetail.title}</h1>
                            {
                                productDetail.discount > 0 ? 
                                <div>
                                    <p className='product-detail_price'>s/.{finalPrice}</p>
                                    <span className='product-detail_descprice'>s/.{productDetail.price}</span>
                                    <span className='product-detail_desc'>-{discount}%</span>
                                </div> : 
                                <p className='product-detail_price'>s/.{productDetail.price}</p>
                            }
                        </div>
                        <div className="info-container_description">
                            <p>{productDetail.description}</p>
                            <Link to={`/categoria/${productDetail.category_slug}`}>{productDetail.category}</Link>
                            <select className='info-container_option' name="select" onChange={HandleSelect} value={choise}>
                                {productDetail.choises.map((choise) => (
                                    <option key={choise.id} value={choise.id}>{choise.option}</option>
                                )
                                )}
                            </select>
                            <div className='info-container_inputs'>
                                <input ref={inputScope} type="number" min="1" value={quantity} onChange={handleChange} />
                                <ShopButton className='info-container_buton' 
                                productDetail={productDetail} quantity={quantity} 
                                discount={discount} finalPrice={finalPrice} choise={choise} price={productDetail.price}>COMPRAR</ShopButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            );
}
