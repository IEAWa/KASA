import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/style.css';
import logo from '../images/LOGO.png';

function Header() {
    const location = useLocation();
    const aproposClass = location.pathname.includes('/Apropos') ? 'underline' : '';
    const homeClass = location.pathname.includes('/') ? 'underline' : '';
    return (
    <header>
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="nav">
            <Link to="/" className={homeClass}>Accueil</Link>
            <Link to="/Apropos" className={aproposClass}>A propos</Link>
        </div>  
    </header>)
}

export default Header