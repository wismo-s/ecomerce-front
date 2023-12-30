import { motion } from 'framer-motion'

export function MotionButton({children, className, scaleHover = 1.05, sacaleTap = 0.95, onClick=()=>{}}) {
  return (
    <motion.button className={className}
        whileHover={{ scale: scaleHover }}
        whileTap={{ scale: sacaleTap }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={onClick}>{children}</motion.button>
  )
}
