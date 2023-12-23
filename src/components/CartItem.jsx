import React from 'react'
import { NavLink } from 'react-router-dom'

export function CartItem({item}) {
    const url = 'http://127.0.0.1:8000/tienda'
    const finalPrice = item.finalPrice * item.quantity
    const discount = (item.discount * item.quantity) / 100
  return (
    <article>
        <div>
            <img src={url+item.port_img} alt={item.title} />
        </div>
        <div>
            <h2>{item.title}</h2>
            <NavLink to={item.category_slug}>{item.category}</NavLink>
            { item.discount > 0 ? 
            <>
                <p>{finalPrice}</p>
                <p>{discount}</p>
                <span>{item.discount}</span>
            </> : 
                <p>{finalPrice}</p>
            }
            <select name='choises'>
                <option value={item.choise[0].id}>{item.choise[0].option}</option>
            </select>
            <input type="number" value={item.quantity}/>
        </div>
    </article>
  )
}
