
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import ReadAll from './pages/item/readAll';
import ReadSingle from './pages/item/readSingle';
import MuiP2 from './pages/MUI Practice/PractiseMui2'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReadAll /> } />
        <Route path='/item/:id' element={<ReadSingle />} />
        <Route path='/muiP2' element={<MuiP2 />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
