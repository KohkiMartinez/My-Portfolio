
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import ReadAll from './pages/item/readAll';
import ReadSingle from './pages/item/readSingle';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReadAll /> } />
        <Route path='/item/:id' element={<ReadSingle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
