import { useEffect, useState } from "react"
import { useAnimate, motion } from "framer-motion"
import { MotionButton } from "./MotionButton"
import '../styles/Taxes.css'

export function Taxes({cart}) {
    const [total, setTotal] = useState(0)
    const [totalNonDesc, setTotalNonDesc] = useState(0)
    const [scope, animete ] = useAnimate()

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.finalTotal, 0)
        const totalNonDesc = cart.reduce((acc, item) => acc + item.totalNonDesc, 0)
        setTotal(total)
        setTotalNonDesc(totalNonDesc)
        animete(scope.current, { opacity: [0, 1], scale: [0.9, 1], transition: { duration: 0.5 }})
    }, [cart])
  return (
    <motion.section className='taxes-container' animate={{x: [200, 0]}}>
        <motion.div className='taxes-container_img' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <img src="src/assets/img/daroma-logo.webp" alt="daroma-logo" />
        </motion.div>
        <div className='taxes' ref={scope}>
            <p>precio: <span>S/. {totalNonDesc}</span></p>
            <p className="taxes-desc">desuentos: <span>S/. {total-totalNonDesc}</span></p>
            <p className="taxes-total">Total: <span>S/. {total}</span></p>
        </div>
        <MotionButton className="taxes-pay-button">PAGAR</MotionButton>
    </motion.section>
  )
}
