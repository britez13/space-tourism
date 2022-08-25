
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import NavTechnology from '../components/NavTechnology';
import data from '../data.json';
import '../styles/Technology.scss'

const technologies = data.technology;
const DESKTOP_BREAKPOINT = 768;

const Technology = () => {

  const {place} = useParams()
  const defaultTechnology = technologies[0];
  let technology = technologies.find( item => item.name.substring(0, item.name.indexOf(' ')).toLowerCase() === place) || defaultTechnology

  if(place === 'spaceport') {
    technology = technologies[1];
  }


  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  
  function getWindowWidth() {
    const {innerWidth} = window;
    return {innerWidth};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className='technology'>
      <Header />
      <h5 className='technology__subheading'><span>03</span>Space launch 101</h5>
      <div className='technology__main-wrapper'>
        <img className='technology__image' src={windowWidth.innerWidth > DESKTOP_BREAKPOINT ? technology.images.portrait  : technology.images.landscape} alt={technology.name} />
        <div className='technology__secondary-wrapper'>
          <NavTechnology />
          <div className='technology__info'>
            <h5 className='technology__terminology'>The terminology...</h5>
            <h3 className='technology__name'>{technology.name}</h3>
            <p className='technology__description'>{technology.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology