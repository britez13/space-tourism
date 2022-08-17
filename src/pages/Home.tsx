import { Link } from 'react-router-dom'
import '../styles/Home.scss'

const Home = (): JSX.Element  => {
  return (
    <main className='home'>
      <div className='home__wrapper'>
        <div className='home__text-container'>
            <h5 className='home__subheading' >So, you want to travel to</h5>
            <h1 className='home__heading'>Space</h1>
            <p className='home__description'>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <div className='home__circle'>
            <Link to='/destination/moon' className='home__explore'>Explore</Link>
        </div>
      </div>
      
    </main>)
}

export default Home