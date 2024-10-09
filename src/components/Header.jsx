import { Link } from 'react-router-dom'
import '../styles/style.css';
import logo from '../images/LOGO.png';

function Header() {
    return (
    <header>
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="nav">
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A propos</Link>
        </div>  
    </header>)
}

export default Header