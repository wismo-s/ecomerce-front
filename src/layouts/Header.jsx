import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'
import { motion } from 'framer-motion'
import '../styles/Header.css'

const links = [
  { id: 1, to: '/insumos', text: 'Insumos' },
  { id: 2, to: '/esencias', text: 'Esencias' },
  { id: 3, to: '/colorantes', text: 'Colorantes' },
]

export function Header() {
    const user = useUserContext();
  return (
    <motion.div className='Header-container' animate={{
        y: [-100, 0],
    }}
    transition={{
        duration: 0.4,
        ease: 'backInOut',
    }}>
        <ul className='Header-list'>
            {links.map(link => (
                <li key={link.id} className='Header-list_link' >
                    <NavLink to={link.to}>{link.text}</NavLink>
                </li>
            ))}
        </ul>
        <div>
            <h1><NavLink to="/">LOGO</NavLink></h1>
        </div>
        <div>
            <ul className='Header-list'>
                {user === null ? (
                    <>
                        <li className='Header-list_link'><NavLink to='/login'>iniciar session</NavLink></li>
                        <li className='Header-list_link'><NavLink to='/create-user'>registarse</NavLink></li>
                    </>
                ):(
                    <>
                        <li className='Header-list_link'><NavLink to='/carrito'>carrito</NavLink></li>
                        <li className='Header-list_link'><NavLink to='/perfil'>perfil</NavLink></li>
                    </>
                )}
            </ul>
        </div>
    </motion.div>
  )
}
