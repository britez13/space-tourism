import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import NavCrew from '../components/NavCrew';
import '../styles/Crew.scss';
import Header from '../components/Header';

const crews = data.crew;

const Crew = () => {
  const {id} = useParams()
  const defaultCrew = crews[0];
  const crew = crews.find( item => item.name.substring(0, item.name.indexOf(' ')).toLowerCase() === id) || defaultCrew
  
  return (
    <section className='crew'>
      <Header />
      <h5 className='crew__subheading'><span>02</span>Meet your crew</h5>
      <div className='crew__main-wrapper'>
        <motion.picture className='crew__image-wrapper'
        initial={{ y: 100 }}
        animate={{ y: 0 }} 
        transition={{ ease: "easeOut", duration: 1 }}>
            <source srcSet={crew.images.webp} type='image/webp' />
            <img className='crew__image' src={crew.images.png} alt={crew.name} />
        </motion.picture>
        <div className='crew__secondary-wrapper'>
          <div className='crew__info'>
            <h3 className='crew__role'>{crew.role}</h3>
            <h2 className='crew__name'>{crew.name}</h2>
            <p className='crew__bio'>{crew.bio}</p>
          </div>
          <NavCrew />
        </div>
      </div>
    </section>
  )
}

export default Crew

