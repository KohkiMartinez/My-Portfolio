
import DogTube from './Pages/dogTube';
import CaTube from './Pages/caTube';
import HowTo from './Pages/HowTo';
import Contact from './Pages/Contact';

import ExVideosTopPage from './Pages/ExVideosTopPage';
import ExVideosMyPage from './Pages/ExVideosMyPage';
import RegisterExVideos from './Pages/RegisterExVideos';
import LoginExVideos from './Pages/LoginExVideos';
import Sono1 from './Pages/Sono1';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<DogTube />} />
        <Route path='/Catube' element={<CaTube />} />

        <Route path='/HowTo' element={<HowTo />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/ExVideos/TopPage' element={<ExVideosTopPage />} />
        <Route path='/ExVideos/MyPage' element={<ExVideosMyPage />} />
        <Route path='/Exvideos/register' element={<RegisterExVideos />} />
        <Route path='/Exvideos/login' element={<LoginExVideos />} />
        <Route path='/ExVideos/ExHowTo' />
        <Route path='/ExVideos/Sono1' element={<Sono1 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
