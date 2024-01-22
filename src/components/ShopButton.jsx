import { setcart,  } from '../hooks/useCart'
import { MotionButton } from './MotionButton'
import { useUserContext } from '../context/userContext'
import toast from 'react-hot-toast';

export function ShopButton({ className, productDetail, quantity, discount, finalPrice, choise, price }) {
  const user = useUserContext()
    const onClick = (e) => {
      if (!user) {
        alert('debes iniciar sesion para poder comprar')
      }else{
        const arrdata = { ...productDetail, 
        quantity: quantity,
        discount: discount,
        unitFinalPrice: finalPrice,
        totalNonDesc: price * quantity,
        finalTotal: finalPrice * quantity,
        }
        delete arrdata.description
        delete arrdata.firts_img
        delete arrdata.second_img
        delete arrdata.third_img
        delete arrdata.four_img
  
        arrdata.choise = arrdata.choises.filter((item) => item.id == choise)
        delete arrdata.choises

        setcart(arrdata)
        alert('producto agregado al carrito')
      }
    }
  return (
    <MotionButton className={className} onClick={onClick}>COMPRAR</MotionButton>
  )
}
