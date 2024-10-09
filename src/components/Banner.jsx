
import '../styles/style.css';


function Banner({image, tagLine}) {
    return (
        <div className='banner'>
            <img src={image} className='banner' alt='banner'/>
            <h1>{tagLine}</h1>
        </div>
    )
}

export default Banner