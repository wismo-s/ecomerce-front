import { NavLink } from 'react-router-dom'
import { removecart, editcart } from '../hooks/useCart'
import { useState, useEffect } from 'react'
import { useAnimate } from 'framer-motion'
import '../styles/CartItem.css'

export function CartItem({item, actualizate}) {
    const url = 'http://127.0.0.1:8000/tienda'
    const [quantity, setQuantity] = useState(item.quantity)
    const [finalPrice, setFinalPrice] = useState(item.finalTotal)
    const [totalPrice, setTotalPrice] = useState(item.totalNonDesc)
    const [scope, animete ] = useAnimate()

    useEffect(() => {
        const totalPrice = item.price * quantity
        const finalPrice = item.unitFinalPrice * quantity
        setTotalPrice(totalPrice)
        setFinalPrice(finalPrice)
        animete(scope.current, { opacity: [0, 1], scale: [1.5, 1], transition: { duration: 0.5 }})
        editcart(item.id, actualizate, quantity, finalPrice, totalPrice);
    }, [quantity])

    const HandleChange = (e) => {
        e.target.value < 1 ? setQuantity(1) : setQuantity(e.target.value)
    }
    const HandleDelete = () => {
        removecart(item.id, actualizate);
    }
  return (
    <article className='cartItem-article'>
        <div className='CartItem-container-img'>
            <img src={url+item.port_img} alt={item.title} />
        </div>
        <div className='text-container'>
            <h2>{item.title}</h2>
            <NavLink to={`/categoria/${item.category_slug}`}>{item.category}</NavLink>
            { item.discount > 0 ? 
            <>
                <p ref={scope} className='final-price'>S/.{finalPrice}</p>
                <p className='total-price'>S/.{totalPrice}</p>
                <span className='discount-porcent'>{item.discount}%</span>
            </> : 
                <p ref={scope} className='final-price'>S/.{totalPrice}</p>
            }
            <select name='choises' className='choises-select'>
                <option value={item.choise[0].id}>{item.choise[0].option}</option>
            </select>
            <input className='quantity-input' onChange={HandleChange} type="number" value={quantity}/>
            <span className='cartItem-delete' onClick={HandleDelete}>U</span>
        </div>
    </article>
  )
}
