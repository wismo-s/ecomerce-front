import '../styles/ProductDetail.css'
import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
export function ProductDetail({productDetail}) {
    const url = 'http://127.0.0.1:8000/tienda'
    const [img, setImg] = useState(url + productDetail.port_img)
    const HandleClick = (e) => {
        setImg(e.target.src)
    }
    const finalPrice = (productDetail.price - productDetail.discount).toFixed(2);
    const discount = ((productDetail.discount * 100)/productDetail.price).toFixed(0);
    return (
        <div className="detail-container">
                    <div className="image-container">
                        <div className="image-container_actual">
                            <img src={img} alt="" />
                        </div>
                        <div className="image-container_carrusel">
                            <div>
                                <img src={url + productDetail.port_img} alt="" onClick={HandleClick} />
                            </div>
                            <div>
                                <img src={url + productDetail.firts_img} alt="" onClick={HandleClick} />
                            </div>
                            {productDetail.second_img && (
                                <div>
                                    <img src={url + productDetail.second_img} alt="" onClick={HandleClick} />
                                </div>
                            )}
                            {productDetail.third_img && (
                                <div>
                                    <img src={url + productDetail.third_img} alt="" onClick={HandleClick} />
                                </div>
                            )}
                            {productDetail.four_img && (
                                <div>
                                    <img src={url + productDetail.four_img} alt="" onClick={HandleClick} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="product-detail-container">
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
                            <Link to={`categoria/${productDetail.category_slug}`}>{productDetail.category}</Link>
                            <select className='info-container_option' name="select">
                                {productDetail.choises.map((choise) => (
                                    <option key={choise.id} value={choise.id}>{choise.option}</option>
                                )
                                )}
                            </select>
                            <div className='info-container_inputs'>
                                <input type="number" min="0"/>
                                <button className='info-container_buton'>COMPRAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
}
