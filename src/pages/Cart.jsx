import React from 'react'
import { useCart } from '../hooks/useCart'
import { CartItem } from '../components/CartItem'
import { Taxes } from '../components/Taxes'
import '../styles/Cart.css'
import { motion, AnimatePresence } from 'framer-motion'
export function Cart() {
  const [cart, setCart] = useCart()
  return (
    <div className='Cart-container'> 
      <motion.div className='cartitems-container' animate={{x: [-200,0]}}>
        <h1>Carrito</h1>
        <AnimatePresence mode='popLayout'>
          { cart.length === 0 ? <h1>No hay productos</h1> : 
            cart.map(item => (
              <CartItem key={item.id} item={item} actualizate={setCart}/>
            ))
          }
        </AnimatePresence>
      </motion.div>
      <Taxes cart={cart} setCart={setCart}/>
    </div>
  )
}
