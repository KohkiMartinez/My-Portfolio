// shodaiPokedex.tsx

import * as React from 'react';

import Data from '../json/PokemonDataShodai.json';
import Header from '../Components/Header';
import SearchResultShodai151 from '../Components/SearchResultShodai';
import { json } from 'react-router-dom';

const GBC_151 = () => {
  const confirmSound: HTMLAudioElement | null = document.getElementById('confirmSound') as HTMLAudioElement ;
  const bottonPushSound: HTMLAudioElement | null = document.getElementById('bottonPushSound') as HTMLAudioElement;

  const [searchTermEng, setSearchTermEng] = React.useState<string>(
    localStorage.getItem('searchedPokemonEGShodaiPokedex') || 'Pikachu'
  )
  const [searchTermNo, setSearchTermNo] = React.useState(
    localStorage.getItem('searchedPokemonNoShodaiPokedex') || '0025'
  )

  const storedPokemonPositionNo = localStorage.getItem('currentPokemonPositionNoShodaiPokedex');
  const defaultPokemonPositionNo = storedPokemonPositionNo ? parseInt(storedPokemonPositionNo, 10): 24;
  const [currentPokemonPositionNo, setCurrentPokemonPositionNo] = React.useState<number>(defaultPokemonPositionNo);
  // const [currentPokemonPositionNo, setCurrentPokemonPositionNo] = React.useState(
  //   localStorage.getItem('currentPokemonPositionNoShodaiPokedex') || 24
  // )
  const [jsonData, setJsonData] = React.useState<object>([]);

  const handleSubmit = () => {
    if (confirmSound.paused) {
        confirmSound.play();
    } else {
        confirmSound.pause();
        confirmSound.currentTime = 0;
        confirmSound.play();
    }
    if (Array.isArray(jsonData)) {
      try {
        const randomIndexNo = Math.floor(Math.random() * 150);
        setSearchTermNo(jsonData[randomIndexNo].No);
        // setSearchTermJP(jsonData[randomIndexNo].name_jp)
        setSearchTermEng(jsonData[randomIndexNo].name_eg)
        setCurrentPokemonPositionNo(randomIndexNo);
        localStorage.setItem('searchedPokemonJPShodaiPokedex', jsonData[randomIndexNo].name_jp);
        localStorage.setItem('searchedPokemonNoShodaiPokedex', jsonData[randomIndexNo].No);
        localStorage.setItem('currentPokemonPositionNoShodaiPokedex', randomIndexNo.toString());
      } catch (err) {
        console.log('Error Getting a random Index number: ', err);
      }
    }
  }
    
  React.useEffect(() => {
    const fetchJsonData = async() => {
      await new Promise(resolve => setTimeout(resolve, 100));
      const dummyData = Data;
      setJsonData(dummyData);
    };

    fetchJsonData();
  }, []);

  React.useEffect(() => {
    const fetchPokenoData2 = async() => {
      if (Array.isArray(jsonData) && jsonData.length > 0) {
        // setSearchTermJP(jsonData[currentPokemonPositionNo].name_jp);
        setSearchTermEng(jsonData[currentPokemonPositionNo].name_eg);
        setSearchTermNo(jsonData[currentPokemonPositionNo].No);
        
        localStorage.setItem('searchedPokemonShodaiPokedex', jsonData[currentPokemonPositionNo].name_eg);
        localStorage.setItem('searchedPokemonJPShodaiPokedex', jsonData[currentPokemonPositionNo].name_jp);
        localStorage.setItem('searchedPokemonNoShodaiPokedex', jsonData[currentPokemonPositionNo].No);
        localStorage.setItem('currentPokemonPositionNoShodaiPokedex', currentPokemonPositionNo.toString());
      }
    }
    fetchPokenoData2();
  }, [currentPokemonPositionNo, jsonData]);

  const goUpButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (bottonPushSound.paused) {
      bottonPushSound.play();
    } else {
      bottonPushSound.pause();
      bottonPushSound.currentTime = 0;
      bottonPushSound.play();
    }
      if (searchTermNo === '151') {
        setCurrentPokemonPositionNo(0);
      } else {
        setCurrentPokemonPositionNo(+currentPokemonPositionNo + 1);
      }
  };

  const goDownButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (bottonPushSound.paused) {
      bottonPushSound.play();
    } else {
      bottonPushSound.pause();
      bottonPushSound.currentTime = 0;
      bottonPushSound.play();
    }
  
      if (searchTermNo === '001') {
        setCurrentPokemonPositionNo(150);
      } else {
        setCurrentPokemonPositionNo(+currentPokemonPositionNo - 1);
      }
  };
  
  return (
    <main>    
      <Header />

      <div className='container'>

        <div className='gameboyBody'>
          <img className='gameboyColorRedImage' src='/images/Pokedex/shodaiPokedex.png'></img>
          <div className='displayShodaiPokedex'>
            <>
              <SearchResultShodai151
                // searchTermJP={searchTermJP} 
                searchTermEng={searchTermEng} 
                searchTermNo={searchTermNo}
              />
            </>
          </div>

          <button onClick={handleSubmit} className='searchButtonShodaiPokedex'></button>

          <audio id='confirmSound' src='/Sounds/ConfirmSound.mp3'></audio>

          <audio id='bottonPushSound' src='/Sounds/BottonPushSound.mp3'></audio>

          <div className='power'></div>

          <button onClick={goUpButton} className='goUpButtonShodaiPokedex'></button>

          <button onClick={goDownButton} className='goDownButtonShodaiPokedex'></button>

        </div>
      </div>
  </main>
  );
};
    
export default GBC_151
