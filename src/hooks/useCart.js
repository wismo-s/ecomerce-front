import { useState, useEffect } from 'react';

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

  return [cart, setCart];
}

const setcart = (arrdata) => {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  localCart ? 
  localStorage.setItem('cart', JSON.stringify([...localCart, arrdata])) :
  localStorage.setItem('cart', JSON.stringify([arrdata])) 
}
const getIndex = (id) => {
  const arr = JSON.parse(localStorage.getItem('cart')) || [];
  return arr.findIndex((item) => item.id === id);
};
const editcart = (id, setcart = ()=>{}, quantity, finalPrice, totalPrice) => {
  const index = getIndex(id);
  const arr = JSON.parse(localStorage.getItem('cart')) || [];
  arr[index].quantity = quantity;
  arr[index].totalNonDesc = totalPrice;
  arr[index].finalTotal = finalPrice;
  localStorage.setItem('cart', JSON.stringify(arr));
  setcart(arr);
};
const removecart = (id, setcart = ()=>{}) => {
  const index = getIndex(id);
  const arr = JSON.parse(localStorage.getItem('cart')) || [];
  arr.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(arr));
  setcart(arr);
};

export { setcart, removecart, editcart }
