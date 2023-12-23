import React from 'react'
import { useCart } from '../hooks/useCart'
import { CartItem } from '../components/CartItem'
export function Cart() {
  const cart = useCart()
  return (
    <div>
      <h1>Carrito</h1>
      { cart.length === 0 ? <h1>No hay productos</h1> : 
        cart.map(item => (
          <CartItem key={item.id} item={item}/>
        ))
      }
    </div>
  )
}
