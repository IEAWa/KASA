
import Header from '../../components/Header.jsx';
import Banner from '../../components/Banner.jsx';
import Gallery from '../../components/Gallery.jsx';
import Footer from '../../components/Footer.jsx';
import banner from '../../images/banner_image1.png';

function Home() {
  return <div><Header /><Banner image={banner} tagLine='Chez vous, partout et ailleur'/><Gallery/><Footer/></div>;
}

export default Home;
