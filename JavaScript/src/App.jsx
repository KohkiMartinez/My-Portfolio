
import Shodai from './Pages/shodai';
import GBA from './Pages/GBA';
import ShodaiPokedex from './Pages/shodaiPokedex';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shodai />} />
        <Route path='GBA' element={<GBA />} />
        <Route path='/shodaiPokedex' element={<ShodaiPokedex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
