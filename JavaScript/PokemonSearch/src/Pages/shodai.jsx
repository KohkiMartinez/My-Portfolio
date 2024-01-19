import * as React from 'react';

import Data from '../json/scrapedData.json';
import Header from '../Components/Header';
import SearchResult from '../Components/SearchResult';
import PokemonSearch from '../Components/PokemonSearch'

const Shodai = () => {
  const confirmSound = document.getElementById('confirmSound');
  const bottonPushSound = document.getElementById('bottonPushSound');

  const [searchTerm, setSearchTerm] = React.useState(
      localStorage.getItem('searchedPokemon') || 'pikachu'
  );
  const [searchTermJP, setSearchTermJP] = React.useState(
      localStorage.getItem('searchedPokemonJP') || 'ピカチュウ'
  )
  const [searchTermNo, setSearchTermNo] = React.useState(
    localStorage.getItem('searchedPokemonNo') || '0025'
  )

  const [currentPokemonPositionNo, setCurrentPokemonPositionNo] = React.useState(
    localStorage.getItem('currentPokemonPositionNo') || 24
  )

  const [loading, setLoading] = React.useState(false);

  const [pokemonData, setPokemonData] = React.useState({
    sprites: null
  })
  const [jsonData, setJsonData] = React.useState('');

  const [userInput, setUserInput] = React.useState('');

  const [displayNo, setDisplayNo] = React.useState(0);

  React.useEffect(() => {
    setLoading(true);
    
    const controller = new AbortController();
    const signal = controller.signal;
  
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLocaleLowerCase()}`, { signal });
        const data = await response.json();
        setPokemonData({
          sprites: data.sprites
        });
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch is Cancelled');
        } else {
          console.log('Error fetching Pokemon: ', err);
          setPokemonData({
            sprites: null
          });
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchPokemon();
    setIsShinyVisible(false);
    setCountVarietyNamesNo(0)
    setVarietiesNo(0)

    return () => {
      controller.abort();
    };
  }, [searchTerm]);
    
  const handleSubmit = () => {

    if (confirmSound.paused) {
      confirmSound.play();      
    } else {
        confirmSound.pause();
        confirmSound.currentTime = 0
        confirmSound.play();
    }

    try {
      const translatedPokemonName = jsonData.length > 0 ? jsonData.filter((jd) => {
        return jd.name_jp.length === userInput.length && jd.name_jp === userInput;
      }) : [];

      setSearchTermJP(translatedPokemonName[0].name_jp);
      setSearchTermNo(translatedPokemonName[0].No);
      setSearchTerm(translatedPokemonName[0].name_eg);
      setCurrentPokemonPositionNo(+translatedPokemonName[0].No - 1)

      localStorage.setItem('searchedPokemon', translatedPokemonName[0].name_eg);
      localStorage.setItem('searchedPokemonJP', translatedPokemonName[0].name_jp);
      localStorage.setItem('searchedPokemonNo', translatedPokemonName[0].No);
      localStorage.setItem('currentPokemonPositionNo', +translatedPokemonName[0].No - 1);
        
    } catch(err) {
        console.log('Error fetching Pokemon: ', err);
    }
  };

  React.useEffect(() => {
      const fetchJsonData = async() => {
          await new Promise(resolve => setTimeout(resolve, 100));
          const dummyData = Data;
          setJsonData(dummyData);
      };
      fetchJsonData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValueJP = e.target.value;
    setUserInput(inputValueJP);
  } 

  const [allAvailableDisplayNoArray, setAllAvailableDisplayNoArray] = React.useState([]);

  const [allAvailableDisplayNoArrayShiny, setAllAvailableDisplayNoArrayShiny] = React.useState([]);

  const [noOfDisplay, setNoOfDisplay] = React.useState('');

  React.useEffect(() => {
    const countDisplayNo = () => {

      if (pokemonData.sprites != null) {
        const checkingPokemonNullData = {
          redblue: pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent,
          yellow: pokemonData.sprites.versions['generation-i'].yellow.front_transparent,

          gold: pokemonData.sprites.versions['generation-ii'].gold.front_transparent,
          silver: pokemonData.sprites.versions['generation-ii'].silver.front_transparent,
          crystal: pokemonData.sprites.versions['generation-ii'].crystal.front_transparent,

          rubysapphire: pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default,
          // emerald: pokemonData.sprites.versions['generation-iii'].emerald.front_default,
          fRedlGreen: pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default,
          

          diamondpearl: pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default,
          platinum: pokemonData.sprites.versions['generation-iv'].platinum.front_default,
          heartgoldsoulsilver: pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default,


          blackwhite: pokemonData.sprites.versions['generation-v']['black-white'].front_default,
          blackwhiteAnime: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,

          // xy: pokemonData.sprites.versions['generation-vi']['x-y'].front_default,
          // omegarubyalphasapphire: pokemonData.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default,

          default: pokemonData.sprites.front_default

        };

        const checkingShinyPokemonNullData = {
          rebblueGray: pokemonData.sprites.versions['generation-i']['red-blue'].front_gray,
          yellowGray: pokemonData.sprites.versions['generation-i'].yellow.front_gray,

          goldShiny: pokemonData.sprites.versions['generation-ii'].gold.front_shiny,
          silverShiny: pokemonData.sprites.versions['generation-ii'].silver.front_shiny,
          crystalShiny: pokemonData.sprites.versions['generation-ii'].crystal.front_shiny_transparent,

          rubysapphireShiny: pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny,
          fRedlGreenShiny: pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny,

          diamondpearlShiny: pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_shiny,
          platinumShiny: pokemonData.sprites.versions['generation-iv'].platinum.front_shiny,
          heartgoldsoulsilverShiny: pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny,

          blackwhiteShiny: pokemonData.sprites.versions['generation-v']['black-white'].front_shiny,
          blackwhiteAnimeShiny: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_shiny,

          // xyShiny:  pokemonData.sprites.versions['generation-vi']['x-y'].front_shiny,
          // omegarubyalphasapphireShiny: pokemonData.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny,

          defaultShiny: pokemonData.sprites.front_shiny

        }
    
        const availableDisplayNoArray = [];
        let counter = 1;
    
        for (const key in checkingPokemonNullData) {
          if (checkingPokemonNullData[key] !== null) {
            availableDisplayNoArray.push( counter );
          }
          counter++;
        }
        availableDisplayNoArray.unshift(0);

        const availableDisplayNoArrayShiny = [];
        let counterS = 1

        for (const key in checkingShinyPokemonNullData) {
          if (checkingShinyPokemonNullData[key] !== null) {
            availableDisplayNoArrayShiny.push( counterS );
          }
          counterS++;
        }
        availableDisplayNoArrayShiny.unshift(0);

        setAllAvailableDisplayNoArray(availableDisplayNoArray);
        setNoOfDisplay(availableDisplayNoArray.length);
        setAllAvailableDisplayNoArrayShiny(availableDisplayNoArrayShiny);

      } else {
        setAllAvailableDisplayNoArray([0]);
        setNoOfDisplay(1);
      }
    };

    countDisplayNo();
  }, [pokemonData]);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setDisplayNo(allAvailableDisplayNoArray[currentIndex])
  }, [currentIndex, allAvailableDisplayNoArray]);

  const goRightButton = (e) => {
    e.preventDefault();
  
    if (bottonPushSound.paused) {
      bottonPushSound.play();
    } else {
      bottonPushSound.pause();
      bottonPushSound.currentTime = 0;
      bottonPushSound.play();
    }
  
    if (currentIndex !== noOfDisplay - 1 && isShinyVisible === false) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === noOfDisplay - 1 && isShinyVisible === false) {
      setCurrentIndex(0);
    }
  };

  const goLeftButton = (e) => {
    e.preventDefault();
  
    if (bottonPushSound.paused) {
      bottonPushSound.play();
    } else {
      bottonPushSound.pause();
      bottonPushSound.currentTime = 0;
      bottonPushSound.play();
    }
  
    if (currentIndex !== 0 && isShinyVisible === false) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0 && isShinyVisible === false) {
      setCurrentIndex(noOfDisplay - 1);
    }
  };

  // isVarietiesPokeom is an array.
  // The data is extracted from json file and if pokeon has varieties, isVarietiesPokeon will 
  // become an array, otherwise its undefined.
  // array => That pokeon has some varieties, undefined => no varieties
  const [isVarietiesPokemon, setIsVarietiesPokemon] = React.useState([]);

  // varietiesPokemonNames are array, data from json file. Display these name on screen.
  const [varietiesPokemonNames, setVarietiesPokemonNames] = React.useState([]);

  const [totalNoOfVarieties, setTotalNoOfVarieties] = React.useState('');

  React.useEffect(() => {
    const fetchPokenoData2 = async() => {
      if (jsonData) {
        setSearchTerm(jsonData[currentPokemonPositionNo].name_eg);
        
        setSearchTermJP(jsonData[currentPokemonPositionNo].name_jp);
        setSearchTermNo(jsonData[currentPokemonPositionNo].No);
        // console.log(jsonData[currentPokemonPositionNo].No);
        
        localStorage.setItem('currentPokemonPositionNo', currentPokemonPositionNo);
        localStorage.setItem('searchedPokemon', jsonData[currentPokemonPositionNo].name_eg);
        localStorage.setItem('searchedPokemonJP', jsonData[currentPokemonPositionNo].name_jp);
        localStorage.setItem('searchedPokemonNo', jsonData[currentPokemonPositionNo].No);

        if (jsonData[currentPokemonPositionNo].varieties) {
          setIsVarietiesPokemon(jsonData[currentPokemonPositionNo].varieties);
          setVarietiesPokemonNames(jsonData[currentPokemonPositionNo].varietyNames);
          setTotalNoOfVarieties(jsonData[currentPokemonPositionNo].varieties.length);
        } else {
          setIsVarietiesPokemon(undefined);
          setVarietiesPokemonNames(undefined);
          setTotalNoOfVarieties(undefined);
        }
      }
    }
    fetchPokenoData2();
  }, [currentPokemonPositionNo, jsonData]);

//   "varieties": [
//     "10234",
//     "qwilfish"
// ],
// "varietyNames": [
//     "ハリーセン",
//     "ヒスイ"
// ]

  const [isShinyVisible, setIsShinyVisible] = React.useState(false);

  const goUpButton = (e) => {
    e.preventDefault();
  
    if (bottonPushSound.paused) {
      bottonPushSound.play();
    } else {
      bottonPushSound.pause();
      bottonPushSound.currentTime = 0;
      bottonPushSound.play();
    }
  
    if (displayNo === 0) {
      if (searchTermNo === '1017') {
        setCurrentPokemonPositionNo(0);
      } else {
        setCurrentPokemonPositionNo(+currentPokemonPositionNo + 1);
      }
    } else if (displayNo > 0 && isShinyVisible === false && displayNo === allAvailableDisplayNoArrayShiny[currentIndex]) {
      setIsShinyVisible(!isShinyVisible);
    }
  };
  
  const goDownButton = (e) => {
    e.preventDefault();
  
    if (bottonPushSound.paused) {
      bottonPushSound.play();
    } else {
      bottonPushSound.pause();
      bottonPushSound.currentTime = 0;
      bottonPushSound.play();
    }
  
    if (displayNo === 0) {
      if (searchTermNo === '0001') {
        setCurrentPokemonPositionNo(1016);
      } else {
        setCurrentPokemonPositionNo(+currentPokemonPositionNo - 1);
      }
    } else if (displayNo !== 0 && isShinyVisible === true && displayNo === allAvailableDisplayNoArrayShiny[currentIndex]) {
      setIsShinyVisible(!isShinyVisible);
    }
  };
  
  const [varietiesNo, setVarietiesNo] = React.useState(0);

  const fetchVarietyPokemon = async (e) => {
    
    e.preventDefault();
  
    if (confirmSound.paused) {
      confirmSound.play();
    } else {
      confirmSound.pause();
      confirmSound.currentTime = 0;
      confirmSound.play();
    }
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;
  
    if (displayNo === 0 && isVarietiesPokemon) {
      try {
        const nextVarietyNo = varietiesNo === totalNoOfVarieties ? 0 : varietiesNo;
        const nextVariety = isVarietiesPokemon[nextVarietyNo].toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextVariety}`, { signal });
        const data = await response.json();
        setPokemonData({
          sprites: data.sprites
        });
        setIsShinyVisible(false);
        setVarietiesNo(nextVarietyNo + 1);
      } catch (err) {
        console.log('Error fetching Pokemon: ', err);              
        setPokemonData({
          sprites: null
        });
        setIsShinyVisible(false);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }

    return () => {
      controller.abort();
    };
  };
  
  const [countVarietyNamesNo, setCountVarietyNamesNo] = React.useState(0);

  React.useEffect (() => {
    const countVarietyNamesNofunc = () => {
      if (varietiesNo === totalNoOfVarieties) {
        setCountVarietyNamesNo(0)
      } if (varietiesNo < totalNoOfVarieties) {
        setCountVarietyNamesNo(varietiesNo);
      } else {
        return null;
      }
    }
    countVarietyNamesNofunc();
  }, [varietiesNo, totalNoOfVarieties] )

  return (
    <main>  
      
      <Header />

      <div className='container'>

      <div className='gameboyBody'>
        <img className='gameboyColorRedImage' src='/images/GBC/gameboyColourAtomicPurple.png'></img>
        <div className='display'>

          {displayNo === 0 && pokemonData.sprites != null && isVarietiesPokemon && (
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
          {displayNo === 0 && pokemonData.sprites != null && !isVarietiesPokemon && (
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
};
    
export default Shodai
