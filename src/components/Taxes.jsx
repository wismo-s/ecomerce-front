import { useEffect, useState } from "react"
import '../styles/Taxes.css'

export function Taxes({cart}) {
    const [total, setTotal] = useState(0)
    const [totalNonDesc, setTotalNonDesc] = useState(0)

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.finalTotal, 0)
        const totalNonDesc = cart.reduce((acc, item) => acc + item.totalNonDesc, 0)
        setTotal(total)
        setTotalNonDesc(totalNonDesc)
    }, [cart])
  return (
    <div className='taxes-container'>
        <h1>LOGO</h1>
        <div className='taxes'>
            <p>precio: <span>S/. {totalNonDesc}</span></p>
            <p className="taxes-desc">desuentos: <span>S/. {total-totalNonDesc}</span></p>
            <p className="taxes-total">Total: <span>S/. {total}</span></p>
        </div>
        <button className="taxes-pay-button">PAGAR</button>
    </div>
  )
}
