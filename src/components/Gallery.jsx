import { Link } from 'react-router-dom';
import '../styles/style.css';
import accommodationList from '../data.json';

function Gallery() {
    return (
        <div className='gallery'>
            {accommodationList.map((accommodation) => (
                <Link to={`Logements/${accommodation.id}`} className='card cursor' key={accommodation.id}>
                    <img src={accommodation.cover} alt="logement"/>
                    <p className='card-title'>{accommodation.title}</p>
				</Link>
            ))}
        </div>
    )
}

export default Gallery
