import { useProductsDetail } from "../hooks/useProductDetails"
import '../styles/ProductDetail.css'
import { useState, Fragment } from 'react'

export function ProductDetail() {
    const product = useProductsDetail()
    const url = 'http://127.0.0.1:8000/tienda'
    return (
        <div className="detail-container">
            {product.port_img ? (
                <Fragment>
                    <div className="image-container">
                        <div className="image-container_actual">
                            <img src={url + product.port_img} alt="" />
                        </div>
                        <div className="image-container_carrusel">
                            <div>
                                <img src={url + product.port_img} alt="" />
                            </div>
                            <div>
                                <img src={url + product.firts_img} alt="" />
                            </div>
                            {product.second_img && (
                                <div>
                                    <img src={url + product.second_img} alt="" />
                                </div>
                            )}
                            {product.third_img && (
                                <div>
                                    <img src={url + product.third_img} alt="" />
                                </div>
                            )}
                            {product.four_img && (
                                <div>
                                    <img src={url + product.four_img} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div></div>
                </Fragment>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
}
