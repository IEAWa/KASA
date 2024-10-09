
import '../styles/style.css';
import logo from '../images/LOGO_white.png';

function Footer() {
    return (
            <div className='footer'>
                <img src={logo} alt="logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
    )
}

export default Footer