import * as React from 'react';

import Data from '../json/scrapedData.json';

import useSharedPokemonData from '../hooks/useSharedPokemonData';

import Header from '../Components/Header';
import SearchResult_GBA from '../Components/SearchResult_GBA';
import PokemonSearch from '../Components/PokemonSearch'

const Gba = React.memo(() => {

  const {
    searchTermJP,countVarietyNamesNo, fetchVarietyPokemon, goDownButton, goUpButton,
    varietiesPokemonNames, goLeftButton, goRightButton, handleSearch, handleSubmit,
    loading, pokemonData, displayNo, isVarietiesPokemon, searchTermNo, isShinyVisible
  } = useSharedPokemonData()

  return (
    <main>  
        
      <Header />

      <div className='container'>
        <div className='gameboyBody'>
          <img className='gameboyColorRedImage' src='/images/GBC/GBA.png'></img>
          <div className='displayGBA'>

            {displayNo === 0 && pokemonData.sprites != null && isVarietiesPokemon.length !== 0 && (
              <>
                <PokemonSearch onSearch={handleSearch} />

                <SearchResult_GBA
                  pokemonData={pokemonData} 
                  searchTermJP={searchTermJP} 
                  searchTermNo={searchTermNo}
                  displayNo={displayNo}
                  isVarietiesPokemon={isVarietiesPokemon}
                  varietiesPokemonNames={varietiesPokemonNames}
                  countVarietyNamesNo={countVarietyNamesNo}
                />
                <div className='varietiesAvailable'>※Diff forms(select)</div>
              </>
            )}
            {displayNo === 0 && pokemonData.sprites != null && isVarietiesPokemon.length === 0 && (
              <>
        
                <PokemonSearch onSearch={handleSearch} />

                <SearchResult_GBA
                  pokemonData={pokemonData} 
                  searchTermJP={searchTermJP} 
                  searchTermNo={searchTermNo}
                  displayNo={displayNo}
                  countVarietyNamesNo={countVarietyNamesNo}
                />
              </>
            )}
            {displayNo != 0 && pokemonData.sprites != null && (
              <SearchResult_GBA
                pokemonData={pokemonData} 
                searchTermJP={searchTermJP} 
                searchTermNo={searchTermNo}
                displayNo={displayNo}
                isShinyVisible={isShinyVisible}
              />
            )}
          </div>

          <button onClick={handleSubmit} disabled={loading} className='searchButtonGBA'></button>
          <audio id='confirmSound' src='/Sounds/ConfirmSound.mp3'></audio>

          <button onClick={goLeftButton} disabled={loading} className='goBackButtonGBA'></button>
          <audio id='bottonPushSound' src='/Sounds/BottonPushSound.mp3'></audio>
          <button onClick={goLeftButton} disabled={loading} className='goBackButtonGBA_L'></button>
          
          <button onClick={goRightButton} disabled={loading} className='goNextButtonGBA'></button>
          <button onClick={goRightButton} disabled={loading} className='goNextButtonGBA_R'></button>

          <div className='power'></div>

          <button onClick={goUpButton} className='goUpButtonGBA'></button>

          <button onClick={goDownButton} className='goDownButtonGBA'></button>

          <button onClick={fetchVarietyPokemon} className='varietyPokemonButtonGBA'></button>
        </div>
      </div>
    </main>
  );
});
    
export default Gba
