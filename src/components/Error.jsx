
import { Link } from 'react-router-dom';
import '../styles/style.css'

function Error() {
    return (
        <div className='error'>
            <h1 className='error-404'>404</h1>
            <h2 className='error-txt'>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/" className='error-link'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}
 
export default Error