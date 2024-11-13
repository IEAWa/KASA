
import '../styles/style.css';
import { useState } from 'react';
import arrowleft from '../images/arrow-left.png';
import arrowright from '../images/arrow-right.png';

function Carousel({imageCarousel}) { 
    // Définition de l'état 'currentSlide'
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = imageCarousel.length;
    // Fonction pour changer l'image actuelle à celle qui se trouve à gauche (précédente)
      const handlePrevious = () => {
        let index = currentSlide - 1;// Calcul du nouvel index : décrémenter l'index actuel
        setCurrentSlide(index < 0 ? length - 1 : index);// Quand on reviens sur la première image on va à dernière image
        };
    // Fonction pour changer l'image actuelle à celle qui se trouve à droite (suivante)
    const handleNext = () => {
        let index = currentSlide + 1;
        setCurrentSlide(index >= length ? 0 : index);
    }; 
    //l'index pour le 'slideCounter'
    let index = currentSlide + 1;

    return (
        <div>
            <section className='carousel' style={{backgroundImage: `url(${imageCarousel[currentSlide]})`}}>
                <img src={arrowleft} className='arrow-left cursor' alt='arrow-left' onClick={handlePrevious}></img>
                <img src={arrowright} className='arrow-right cursor' alt='arrow-right' onClick={handleNext}></img>
                <span className='slideCounter'>{index}/{length}</span>     
            </section>   
        </div>
    ) 
}

export default Carousel

