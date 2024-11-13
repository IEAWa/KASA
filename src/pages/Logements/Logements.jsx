
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Collapse from '../../components/Collapse.jsx';
import accommodationList from '../../data.json';
import Carousel from '../../components/Carousel.jsx';
import '../../styles/style.css';
import emptystar from '../../images/empty-star.png';
import fullstar from '../../images/full-star.png';
import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Logement() {
  // déclaration de l'état local pour gérer les images du carousel
    const [imageCarousel, setImageCarousel] = useState([]);
    const { id } = useParams(); // Récupération de l'ID via useParams
    
    // filtrage de la liste des logements pour obtenir le logement correspondant à l'ID
    const dataCurrentLogement = accommodationList.filter(data => data.id === id);

    useEffect(() => { 
      const dataCurrentLogement = accommodationList.filter(data => data.id === id);
      setImageCarousel(dataCurrentLogement[0].pictures) // Mise à jour de l'état 'imageCarousel' avec les photos du logement
    }, [id]
    );

   //redirection vers page d'erreur si le tableau est vide (aucun logement correspondant à l'id)
    if (dataCurrentLogement.length === 0) {
      return <Navigate to='/error' />
    }

    const rental = dataCurrentLogement[0];
    // met la liste des équipements en une liste d'éléments <li>
    const equipements = rental.equipments.map((equipement, index) => <li key={index} className='equipment'>{equipement}</li>)
    // met des tags en éléments de div
    const tags = rental.tags.map((tag, index) => <div className='tag' key={index}>{tag}</div>)

    const [firstName, lastName] = rental.host.name.split(' ');
  
    //rating: configuration pour l'affichage des étoiles
    const range = [1, 2, 3, 4, 5];
    const note = rental.rating;

    return (<div><Header />
    <Carousel imageCarousel = {imageCarousel} />
    <div className='rental-info'>

      <div className='rental-title-tags'>
        <div className='rental-title'>
          <h2>{rental.title}</h2>
          <p className='location'>{rental.location}</p>
        </div>
        <div className='tags'>
          {tags}
        </div>
      </div> 

      <div className='host-rate'>        
        <div className='host-profile'>
          <p className='host-name'>{firstName}<br></br>{lastName}</p>
          <img src={rental.host.picture} className='host-pic' alt='host'></img>
        </div>
        <div className='rate'>
            <div className='rating'>
                {range.map((star, index) => ( 
                note >= star ? 
                (<img src={fullstar} alt='full-star' key={index} ></img>):  
                (<img src={emptystar} alt='empty-star' key={index} ></img>)
                ))}
            </div>
          </div>
      </div>

    </div>

      <div className='logement-collapse'>
        <Collapse title='Description'  content={rental.description}/>
        <Collapse title='Equipements'  content={equipements}/>
      </div>

    <Footer /></div>)
  }
  
export default Logement;
