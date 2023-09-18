import React, { useState } from 'react'
import caltexLogo from '../images/caltex_logo.png'
// import { Link } from 'react-router-dom'
import './Navbar.css'
import { navItems } from './NavItems'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false)
    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close the menu when a menu item is clicked
    };
    return (
        <>
            <nav className='navber'>
                <span >
                    <Link to='/'>
                    <img src={caltexLogo} alt="" />
                    </Link>
                </span>
                <div className={`lower-navber ${ menuOpen ? 'open': '' }`}>
                <ul className='nav-items'>
                    {navItems.map(items => {
                        return (
                            <li key={items.id} className={items.cName}>
                                <Link to={items.path} onClick={handleMenuItemClick}>{items.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
                <span className='icon' onClick={()=>setMenuOpen(!menuOpen)}><i class="fa-solid fa-bars"></i></span>


            </nav>
        </>
    )
}
// lower-navber
export default Navbar