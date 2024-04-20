// shodai.tsx

import * as React from 'react';

import useSharedPokemonData from '../hooks/useSharedPokemonData';

import Header from '../Components/Header';
import SearchResult from '../Components/SearchResult';
import PokemonSearch from '../Components/PokemonSearch'

const Shodai = React.memo(() => {

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
        <img className='gameboyColorRedImage' src='/images/GBC/gameboyColourAtomicPurple.png'></img>
        <div className='display'>

          {displayNo === 0 && pokemonData.sprites != null && isVarietiesPokemon.length !== 0 && (
            <>
              <PokemonSearch onSearch={handleSearch} />

              <SearchResult
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

              <SearchResult
                pokemonData={pokemonData} 
                searchTermJP={searchTermJP} 
                searchTermNo={searchTermNo}
                displayNo={displayNo}
                countVarietyNamesNo={countVarietyNamesNo}
              />
            </>
          )}

          {displayNo != 0 && pokemonData.sprites != null && (
            <SearchResult
              pokemonData={pokemonData} 
              searchTermJP={searchTermJP} 
              searchTermNo={searchTermNo}
              displayNo={displayNo}
              isShinyVisible={isShinyVisible}
            />
          )}
        </div>

        <button onClick={handleSubmit} disabled={loading} className='searchButton'></button>
        <audio id='confirmSound' src='/Sounds/ConfirmSound.mp3'></audio>

        <button onClick={goLeftButton} disabled={loading} className='goBackButton'></button>
        <audio id='bottonPushSound' src='/Sounds/BottonPushSound.mp3'></audio>
        
        <button onClick={goRightButton} disabled={loading} className='goNextButton'></button>

        <div className='power'></div>

        <button onClick={goUpButton} className='goUpButton'></button>

        <button onClick={goDownButton} className='goDownButton'></button>

        <button onClick={fetchVarietyPokemon} className='varietyPokemonButton'></button>
        </div>

      </div>
    </main>
  );
});
    
export default Shodai
