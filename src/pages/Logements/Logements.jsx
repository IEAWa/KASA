
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Collapse from '../../components/Collapse.jsx';
import accommodationList from '../../data.json';
import Carousel from '../../components/Carousel.jsx';
import '../../styles/style.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Logement() {
    const [imageCarousel, setImageCarousel] = useState([]);
    const idAccommodation = useParams('id').id;
    const dataCurrentLogement = accommodationList.filter(data => data.id === idAccommodation);
    useEffect(() => { 
      const dataCurrentLogement = accommodationList.filter(data => data.id === idAccommodation);
      setImageCarousel(dataCurrentLogement[0].pictures)
    }, [idAccommodation]
    );
    const rental = dataCurrentLogement[0];
    const equipement = rental.equipments.map((equipment) => <li>{equipment}</li>)

    return <div><Header />
    <Carousel imageCarousel = {imageCarousel} />
    <div className='rental-info'>
      <h2>{rental.title}</h2>
      <p className='location'>{rental.location}</p>
    </div>
      <div className='logement-collapse'>
        <Collapse title='Description' content={rental.description}/>
        <Collapse title='Equipements'content={equipement}/>
      </div>
    <Footer /></div>;
  }
  
export default Logement;
