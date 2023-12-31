import { setcart, useCart } from '../hooks/useCart'
import { MotionButton } from './MotionButton'

export function ShopButton({ className, productDetail, quantity, discount, finalPrice, choise, price }) {
  const cart = useCart()
    const onClick = (e) => {
      const arrdata = { ...productDetail, 
      quantity: quantity,
      discount: discount,
      unitFinalPrice: finalPrice,
      totalNonDesc: price * quantity,
      finalTotal: finalPrice * quantity,
      }
      console.log(arrdata);
      delete arrdata.description
      delete arrdata.firts_img
      delete arrdata.second_img
      delete arrdata.third_img
      delete arrdata.four_img

      arrdata.choise = arrdata.choises.filter((item) => item.id == choise)
      delete arrdata.choises

      setcart(arrdata)
    }
  return (
    <MotionButton className={className} onClick={onClick}>COMPRAR</MotionButton>
  )
}
