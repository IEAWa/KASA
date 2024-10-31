
import '../styles/style.css';
import PropTypes from 'prop-types';

function Banner({image, tagLine}) {
    return (
        <div className='banner'>
            <img src={image} className='banner' alt='banner'/>
            <h1>{tagLine}</h1>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string,
    tagLine: PropTypes.string,
}
 

export default Banner