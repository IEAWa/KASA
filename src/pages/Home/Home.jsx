
import Header from '../../components/Header.jsx';
import Banner from '../../components/Banner.jsx';
import Gallery from '../../components/Gallery.jsx';
import Footer from '../../components/Footer.jsx';
import banner from '../../images/banner_image1.png';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = `Kasa`
  }, [])
  return <div>
    <Header />
    <Banner image={banner} tagLine='Chez vous, partout et ailleur'/>
    <Gallery/>
    <Footer/></div>;
}

export default Home;
