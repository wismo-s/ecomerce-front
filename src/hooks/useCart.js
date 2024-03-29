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
  if(localCart){
    const cartItem =  localCart.findIndex((item) => item.id === arrdata.id)
    if(cartItem != -1){
      localCart[cartItem].quantity =  parseInt(localCart[cartItem].quantity) + parseInt(arrdata.quantity)
      localStorage.setItem('cart', JSON.stringify(localCart))
    }else{
      localStorage.setItem('cart', JSON.stringify([...localCart, arrdata]))
    }
  }else{
    localStorage.setItem('cart', JSON.stringify([arrdata])) 
  }
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
const resetCart = (setCart = () =>{}) => {
  localStorage.removeItem('cart');
  setCart(null);
}
export { setcart, removecart, editcart, resetCart }
