import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import './App.scss'
import Header from './components/Header'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} >
        <Route path=':place' element={null} />
        </Route>
        <Route path='crew' element={<Crew />} >
          <Route path=':place' element={null} />
        </Route>
        <Route path='technology' element={<Technology />} >
          <Route path=':place' element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


