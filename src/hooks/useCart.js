import { useState, useEffect } from 'react';
const setcart = (arrdata) => {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  localCart ? 
  localStorage.setItem('cart', JSON.stringify([...localCart, arrdata])) :
  localStorage.setItem('cart', JSON.stringify([arrdata])) 
}

const removecart = () => {
  
}


export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));

    if (localCart) {
      setCart(localCart);
    } else {
      setCart([]);
    }
  }, []);

  return cart;
}

export { setcart, removecart }
