
import { useParams } from 'react-router-dom';
import NavTechnology from '../components/NavTechnology';
import data from '../data.json';
import '../styles/Technology.scss'

const technologies = data.technology

const Technology = () => {

  const {place} = useParams()
  const defaultTechnology = technologies[0];
  const technology = technologies.find( item => item.name.substring(0, item.name.indexOf(' ')).toLowerCase() === place) || defaultTechnology

  return (
    <section className='technology'>
      <h5 className='technology__subheading'><span>03</span>Space launch 101</h5>
      <div className='technology__main-wrapper'>
        <img className='technology__image' src={technology.images.landscape} alt={technology.name} />
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