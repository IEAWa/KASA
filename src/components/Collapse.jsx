
import '../styles/style.css';
import { useState } from 'react';
import image from '../images/arrow.png';


function Collapse({title, content, id}) {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className='collapse-container' key={id} >
                <button className='collapse-button cursor' onClick={() => setVisible(true) }>
                    <p>{title}</p>
                    <img src={image} className='arrow' alt='arrow'></img>
                </button>  
                {visible && <div className='collapse-content'>
                   <p>{content}</p>
                </div>}
            </div>
        </div>
    )
}

export default Collapse