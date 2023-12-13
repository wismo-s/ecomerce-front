import React from 'react'

export function ProductCarts({product}) {
  return (
    <div>
        <div>{product.port_img}</div>
        <div>
            <div>
                <h3>{product.title}</h3>
                {
                    product.discount > 0 ? <p>{product.price}</p> : 
                    <div>
                        <span>{product.price}</span>
                        <p>{product.price - product.discount}</p>
                        <span>{((product.discount * 100)/product.price).toFixed(2)}</span>
                    </div>
                }
            </div>
            <div>
                <button>comprar</button>
            </div>
        </div>
    </div>
  )
}
