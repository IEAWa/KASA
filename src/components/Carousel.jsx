
import '../styles/style.css';
import { useState } from 'react';
import arrowleft from '../images/arrow-left.png';
import arrowright from '../images/arrow-right.png';

function Carousel({imageCarousel}) { 
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = imageCarousel.length;
      const handlePrevious = () => {
        const index = currentSlide - 1;
        setCurrentSlide(index < 0 ? length - 1 : index);
        };
        
    const handleNext = () => {
        const index = currentSlide + 1;
        setCurrentSlide(index >= length ? 0 : index);
    }; 

    return (
        <div>
            <section className='carousel' style={{backgroundImage: `url(${imageCarousel[currentSlide]})`}}>
                <img src={arrowleft} className='arrow-left' alt='arrow-left' onClick={handlePrevious}></img>
                <img src={arrowright} className='arrow-right' alt='arrow-right' onClick={handleNext}></img>
            </section>
        </div>
    ) 
}

export default Carousel

