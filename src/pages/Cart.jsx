import React from 'react'
import { useCart } from '../hooks/useCart'
import { CartItem } from '../components/CartItem'
import { Taxes } from '../components/Taxes'
import '../styles/Cart.css'
import { motion } from 'framer-motion'
export function Cart() {
  const [cart, setCart] = useCart()
  return (
    <div className='Cart-container'> 
      <motion.div className='cartitems-container' animate={{x: [-200,0]}}>
        <h1>Carrito</h1>
        { cart.length === 0 ? <h1>No hay productos</h1> : 
          cart.map(item => (
            <CartItem key={item.id} item={item} actualizate={setCart}/>
          ))
        }
      </motion.div>
      <Taxes cart={cart}/>
    </div>
  )
}
