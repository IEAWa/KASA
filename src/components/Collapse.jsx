import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/style.css';
import { useState } from 'react';
import image from '../images/arrow.png';

function Collapse({title, content, id}) {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const className = location.pathname.includes('/Apropos') ? 'collapse-container' : 'logement-container';
    return (
        <div className={className} key={id} >
            <button className='collapse-button cursor' onClick={() => setVisible(!visible) }>
                <p>{title}</p>
                <img src={image} alt='arrow'  className={visible ?'arrow arrow-up' : 'arrow arrow-down'}></img>
            </button> 
            {visible && <div className='collapse-content'>
                <p>{content}</p>
            </div>}
        </div>
    )
}

export default Collapse