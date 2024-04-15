import MyFavouritePokemonImage from './Pages/MyFavouritePokemonImage';
import Contact from './Pages/ContactPokemon';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import About from './Pages/About';
import HowTo from './Pages/HowTo';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyFavouritePokemonImage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/about' element={<About />} />
          <Route path='/howto' element={<HowTo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
