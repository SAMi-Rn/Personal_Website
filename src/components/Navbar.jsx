import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <header className='header'>
            <NavLink to="/" className="navlink-3d">
                <p className='name3d'> Sami Roudgarian </p>
            </NavLink>
            <div className="nav-container" style={{ display: 'flex', gap: '2px' }}>
                <nav className='nav-3d'>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "text-red-600" : "text-white"}>
                        About
                    </NavLink>
                </nav>
                <nav className='nav-3d'>
                    <NavLink to='/projects' className={({ isActive }) => isActive ? "text-red-600" : "text-white"}>
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar