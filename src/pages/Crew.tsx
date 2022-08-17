
import { useParams } from 'react-router-dom';
import data from '../data.json';
import NavCrew from '../components/NavCrew';
import '../styles/Crew.scss';

const crews = data.crew;

const Crew = () => {
  const {place} = useParams()
  const defaultCrew = crews[0];
  const crew = crews.find( item => item.name.toLowerCase() === place) || defaultCrew
  console.log(defaultCrew);
  
  return (
    <section className='crew'>
      <h5 className='crew__subheading'><span>02</span>Meet your crew</h5>
      <picture className='crew__image-wrapper'>
          <source srcSet={crew.images.webp} type='image/webp' />
          <img src={crew.images.png} alt={crew.name} />
      </picture>
      <div className='crew__info'>
        <NavCrew />
        <h3 className='crew__role'>{crew.role}</h3>
        <h2 className='crew__name'>{crew.name}</h2>
        <p className='crew__bio'>{crew.bio}</p>
      </div>

    </section>
  )
}

export default Crew

