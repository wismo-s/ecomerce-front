import { setcart } from '../hooks/useCart'

export function ShopButton({ className, productDetail, quantity, discount, finalPrice, choise }) {
    const onClick = (e) => {
      const arrdata = { ...productDetail, 
      quantity: quantity,
      discount: discount,
      finalPrice: finalPrice,
      }

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
    <button className={className} onClick={onClick}>COMPRAR</button>
  )
}
