
import data from '../data.json';
import NavDestination from '../components/NavDestination';
import { useParams } from 'react-router-dom';

import '../styles/Destination.scss'

const destinations = data.destinations;

const Destination = () => {

  const {place} = useParams()
  const defualtDestination = destinations[0]
  const destination = destinations.find( item => item.name.toLowerCase() === place) || defualtDestination
    
  
  return (
    <section className='destination'>
      <h5 className='destination__subheading'><span>01</span>Pick your destination</h5>
      <div className='destination__main-wrapper'>
        <picture className='destination__image-wrapper'>
          <source srcSet={destination.images.webp} type='image/webp' />
          <img className='destination__image' src={destination.images.png} alt={destination.name} />
        </picture>
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


