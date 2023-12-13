import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const links = [
  { id: 1, to: '/insumos', text: 'Insumos' },
  { id: 2, to: '/esencias', text: 'Esencias' },
  { id: 3, to: '/colorantes', text: 'Colorantes' },
]

export function Header() {
  return (
    <div className='Header-container'>
        <ul className='Header-list'>
            {links.map(link => (
                <li key={links.id} className='Header-list_link' >
                    <NavLink to={link.to}>{link.text}</NavLink>
                </li>
            ))}
        </ul>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul className='Header-list'>
                <li className='Header-list_link'>O</li>
                <li className='Header-list_link'>C</li>
                <li className='Header-list_link'>U</li>
            </ul>
        </div>
    </div>
  )
}
