import React from 'react'
import { motion } from 'framer-motion'
import '../styles/DecorationFrame.css'

export function DecorationFrame() {
  return (
    <motion.div className='decarationFrame-container' animate={{x:[-500, 0]}} whileHover={{scale:1.1}}>
        <div className='paneton'>
          <img src="src/assets/img/paneton.webp" alt="paneton" />
        </div>
        <div className='pastel-artesanal'>
          <img src="src/assets/img/helados-artesanales.webp" alt="helados-artesanales" />
        </div>
        <div className='pastel'>
          <img src="src/assets/img/Pastel.webp" alt="Pastel" />
        </div>
    </motion.div>
  )
}
