
import '../styles/style.css';
import { useState } from 'react';
import image from '../images/arrow.png';


function Collapse({title, content, id}) {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className='collapse-container' key={id} >
                <button className='collapse-button cursor' onClick={() => setVisible(!visible) }>
                    <p>{title}</p>
                     <img src={image} alt='arrow'  className={visible ?'arrow arrow-up' : 'arrow arrow-down'}></img>
                </button> 
                {visible && <div className='collapse-content'>
                   <p>{content}</p>
                </div>}
            </div>
        </div>
    )
}

export default Collapse