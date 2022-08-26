
import data from '../data.json';
import NavDestination from '../components/NavDestination';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Destination.scss'
import Header from '../components/Header';

const destinations = data.destinations;

const Destination = () => {

  const {id} = useParams()
  const defualtDestination = destinations[0]
  const destination = destinations.find( item => item.name.toLowerCase() === id) || defualtDestination
    
  
  return (
    <section className='destination'>
      <Header />
      <h5 className='destination__subheading'><span>01</span>Pick your destination</h5>
      <div className='destination__main-wrapper'>
        <motion.picture className='destination__image-wrapper'
         initial={{ x: -100 }}
         animate={{ x: 0 }} 
         transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <source srcSet={destination.images.webp} type='image/webp' />
          <img className='destination__image' src={destination.images.png} alt={destination.name} />
        </motion.picture>
        <div className='destination__info'>
          <NavDestination />
          <h2 className='destination__heading'>{destination.name}</h2>
          <p className='destination__description'>{destination.description}</p>
          <span className='destination__line'></span>
          <div className='destination__extra-info'>
            <div className='destination__distance-wrapper'>
              <h5 className='destination__distance-heading'>Avg. distance</h5>
              <h3 className='destination__distance-value'>{destination.distance}</h3>
            </div>
            <div className='destination__travel'>
              <h5 className='destination__travel-heading'>Est. travel time</h5>
              <h3 className='destination__travel-value'>{destination.travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination


