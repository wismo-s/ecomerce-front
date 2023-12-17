import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'
import '../styles/Header.css'

const links = [
  { id: 1, to: '/insumos', text: 'Insumos' },
  { id: 2, to: '/esencias', text: 'Esencias' },
  { id: 3, to: '/colorantes', text: 'Colorantes' },
]

export function Header() {
    const user = useUserContext();
  return (
    <div className='Header-container'>
        <ul className='Header-list'>
            {links.map(link => (
                <li key={link.id} className='Header-list_link' >
                    <NavLink to={link.to}>{link.text}</NavLink>
                </li>
            ))}
        </ul>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul className='Header-list'>
                <li className='Header-list_link'>S</li>
                {user === null ? (
                    <>
                        <li className='Header-list_link'>iniciar session</li>
                        <li className='Header-list_link'>registarse</li>
                    </>
                ):(
                    <>
                        <li className='Header-list_link'>carrito</li>
                        <li className='Header-list_link'>perfil</li>
                    </>
                )}
            </ul>
        </div>
    </div>
  )
}
