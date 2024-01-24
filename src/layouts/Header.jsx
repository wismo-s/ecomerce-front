import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'
import { motion } from 'framer-motion'
import { Cart4, PersonCircle, List } from 'react-bootstrap-icons'
import '../styles/Header.css'

const links = [
  { id: 1, to: 'categoria/insumos', text: 'Insumos' },
  { id: 2, to: 'categoria/esencias', text: 'Esencias' },
  { id: 3, to: 'categoria/colorantes', text: 'Colorantes' },
]

export function Header() {
    const user = useUserContext();
  return (
    <motion.nav className='Header-container' animate={{
        y: [-100, 0],
    }}
    transition={{
        duration: 0.4,
        ease: 'backInOut',
    }}>
        <input className='check-nabvar' type="checkbox" id='check'/>
        <label className='lavel-nabvar' htmlFor="check">
            <List size={60}></List>
        </label>
        <ul className='Header-list'>
            {links.map(link => (
                <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} key={link.id} className='Header-list_link' >
                    <NavLink to={link.to}>{link.text}</NavLink>
                </motion.li>
            ))} 
        </ul>
        <motion.div className='header-container_img' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <NavLink to="/"><img src="src/assets/img/daroma-logo.webp" alt="daroma-logo" /></NavLink>
        </motion.div>
        <div className='perfil-links-navbar'>
            <ul className='Header-list'>
                {user === null ? (
                    <>
                        <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.8}} className='Header-list_link'><NavLink to='/login'>iniciar session</NavLink></motion.li>
                        <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.8}} className='Header-list_link'><NavLink to='/create-user'>registarse</NavLink></motion.li>
                    </>
                ):(
                    <>
                        <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.8}} className='Header-list_link'><NavLink to='/carrito'><Cart4 size={30} color='#009746'></Cart4></NavLink></motion.li>
                        <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.8}} className='Header-list_link'><NavLink to='/perfil'><PersonCircle size={30} color='#009746'></PersonCircle></NavLink></motion.li>
                    </>
                )}
            </ul>
        </div>
    </motion.nav>
  )
}
