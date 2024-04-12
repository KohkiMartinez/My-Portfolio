// MyFavourtitePokemonImage.tsx

import * as React from 'react';
import html2canvas from 'html2canvas';
import { ChangeEvent } from 'react';

import Data from '../Json/scrapedData.json';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import type { PokemonData2 } from '../Types/PokemonData2';
import type { SelectedImageFrameColors } from '../Types/SelectedImageFrameColors';

import NumOfPokemon from '../Components/NumOfPokemon';
import PokemonDropdown from '../Components/PokemonDropdown';
import AddingPhrase from '../Components/AddingPhrase';
import HeaderColor from '../Components/HeaderColor';
import HeaderFrameColor from '../Components/HeaderFrameColor';
import SaveButton from '../Components/SaveButton';
import FAQ from '../Components/FAQ';
import BackgroundImage from '../Components/BackgroundImage';

type SelectedPokemon = {
  [key: number]: {
    shownPokemonName: string
  };
};
type FetchData = {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string,
        front_shiny: string
      };
    };
  };
};
type ImageData = {
  front_default: string,
  front_shiny: string
};

const Shodai: React.FC = () => {

  const [selectedOption, setSelectedOption] = React.useState<number>(0);
  const options: string[] = [
    '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18'
  ];

  const handleShiny = (index: number): void => {
    setPokemonData2((prevData: PokemonData2) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        isShiny: !pokemonData2[index].isShiny
      }
    }));
  };
  
  const handleSelectedChange = React.useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(+e.target.value);
  },[]);

  // Adding header
  const [writing, setWriting] = React.useState<string>('My Favourite Pokemon')
  const addingPhrase = React.useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const inputWriting = e.target.value;
    setWriting(inputWriting);
  }, []);

  // Changing header (header frame) color
  const [selectedHeaderColor, setSelectedHeaderColor] = React.useState<string>('#1c0080')
  const handleHeaderColorChange = React.useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedHeaderColor(e.target.value);
  }, []);

  const [selectedHeaderFrameColor, setSelectedHeaderFrameColor] = React.useState<string>('#ffffff')
  const handleHeaderFrameColorChange = React.useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedHeaderFrameColor(e.target.value);
  }, []);

  // Adjusting header Frame Width
  const [selectHeaderFrameWidth, setSelectHeaderFrameWidth] = React.useState<number>(1.0);

  React.useEffect(() => {
    handleWidthChange();
  }, []);

  const handleWidthChange = (): void => {
    const newWidth = window.innerWidth <= 700 ? 0.5 : 1;
    setSelectHeaderFrameWidth(newWidth);
  };

  // adding pokemon Images
  const elements: React.ReactNode[] = [];
  const [selectedImagesColor, setSelectedImagesColor] = React.useState<string>('#1c0080');

  // Image frame color
  const [selectedImageFrameColors, setSelectedImageFrameColors] = React.useState<SelectedImageFrameColors>({
    0: {
      imageFrameColor: '#1c0080'
    },
    1: {
      imageFrameColor: '#1c0080'
    },
    2: {
      imageFrameColor: '#1c0080'
    },
    3: {
      imageFrameColor: '#1c0080'
    },
    4: {
      imageFrameColor: '#1c0080'
    },
    5: {
      imageFrameColor: '#1c0080'
    },
    6: {
      imageFrameColor: '#1c0080'
    },
    7: {
      imageFrameColor: '#1c0080'
    },
    8: {
      imageFrameColor: '#1c0080'
    },
    9: {
      imageFrameColor: '#1c0080'
    },
    10: {
      imageFrameColor: '#1c0080'
    },
    11: {
      imageFrameColor: '#1c0080'
    },
    12: {
      imageFrameColor: '#1c0080'
    },
    13: {
      imageFrameColor: '#1c0080'
    },
    14: {
      imageFrameColor: '#1c0080'
    },
    15: {
      imageFrameColor: '#1c0080'
    },
    16: {
      imageFrameColor: '#1c0080'
    },
    17: {
      imageFrameColor: '#1c0080'
    }
  });

  // Pokemon Name
  const [selectedPokemon, setSelectedPokemon] = React.useState<SelectedPokemon>({
    0: {
      shownPokemonName: ''
    },
    1: {
      shownPokemonName: ''
    },
    2: {
      shownPokemonName: ''
    },
    3: {
      shownPokemonName: ''
    },
    4: {
      shownPokemonName: ''
    },
    5: {
      shownPokemonName: ''
    },
    6: {
      shownPokemonName: ''
    },
    7: {
      shownPokemonName: ''
    },
    8: {
      shownPokemonName: ''
    },
    9: {
      shownPokemonName: ''
    },
    10: {
      shownPokemonName: ''
    },
    11: {
      shownPokemonName: ''
    },
    12: {
      shownPokemonName: ''
    },
    13: {
      shownPokemonName: ''
    },
    14: {
      shownPokemonName: ''
    },
    15: {
      shownPokemonName: ''
    },
    16: {
      shownPokemonName: ''
    },
    17: {
      shownPokemonName: ''
    }
  });

  // Pokemon Data from PokeAPI
  const [pokemonData2, setPokemonData2] = React.useState<PokemonData2>({
    0: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    1: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    2: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    3: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    4: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    5: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    6: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    7: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    8: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    9: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    10: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    11: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    12: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    13: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    14: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    15: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    16: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    },
    17: {
      sprites: '',
      shiny: '',
      isShiny: false,
      border: '1px solid rgb(221, 75, 221)'
    }
  });

  // Changing All Images Frame Color
  const handleAllImagesFrameColorChange = async(e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setSelectedImagesColor(e.target.value);

    for (let i = 0; i < +selectedOption; i++) {
      setSelectedImageFrameColors(prevData => ({
        ...prevData,
        [i]: {
          imageFrameColor: e.target.value
        }
      }));
    };
  };

  // Changing each Image frame Color
  const handleImageFrameColorChange = (index: number) => async(e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setSelectedImageFrameColors(prevData => ({
      ...prevData,
      [index]: {
        imageFrameColor: e.target.value
      }
    }));
  };

  const handleSubmit2 = (index: number) => async(e: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    setSelectedPokemon(prevData => ({
      ...prevData,
      [index]: {
        shownPokemonName: e.target.value
      }
    }));

    try {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value.toLocaleLowerCase()}`);
        const data: FetchData = await response.json();

        if (data.sprites !== undefined) {
          const imageData: ImageData = data.sprites.other['official-artwork']
          setPokemonData2(prevData=> ({
            ...prevData,
            [index]: {
              sprites: imageData.front_default,
              shiny: imageData.front_shiny,
              isShiny: pokemonData2[index].isShiny,
              border: '1.9px solid rgb(4, 113, 4)'
            }
          }));
        } else {
          setPokemonData2(prevData => ({
            ...prevData,
            [index]: {
              sprites: '',
              shiny: '',
              isShiny: false,
              border: '1px solid rgb(221, 75, 221)'
            }
          }));
        }
    } catch(err) {
        console.log('Error fetching Pokemon: ', err);
        setPokemonData2( prevData => ({
          ...prevData,
          [index]: {
            sprites: '',
            shiny: '',
            isShiny: false,
            border: '1px solid rgb(221, 75, 221)'
          }
        }));
    }
  }

  for (let i = 0; i < +selectedOption; i++) {
    elements.push(
    <div key={i} className={`pokemonDropdownEach pokemonDropdownEach${i}`}
      style={{ border: pokemonData2[i].border }}>

      <label htmlFor={`selectPokemonDropdown${i}`}>Pokemon {i + 1} </label>
      <select id={`selectPokemonDropdown${i}`} value={selectedPokemon[i].shownPokemonName} 
        onChange={handleSubmit2(i)}>
        <option value="" className='notSelectedPokemon'>Choose Pokemon</option> 
          {Data.map((d, index) => (
            <option key={index} value={d.name_eg}>
              No:{d.No} {d.name_jp}
            </option>
          ))}
      </select>

      <div className='pokemonDropdownStyles'>
        <div className='pokeonDropdownColorStyle'>
          <label htmlFor={`headerFrameColorInput${i}`}>Choose colour: </label>
          <input 
            type='color'
            id={`headerFrameColorInput${i}`}
            value={selectedImageFrameColors[i].imageFrameColor}
            onChange={handleImageFrameColorChange(i)}
          />
        </div>

        <div className='pokemonDropdownIsShinyButtonStyle'>
          {pokemonData2[i].shiny ? (
          <>
            <div>ShinyButton</div>
            <label className="switch__label">
              <input type="checkbox" className="switch__input" onChange={() => handleShiny(i)}/>
              <span className="switch__content"></span>
              <span className="switch__circle"></span>
            </label>
          </>
        ): (
          <div></div>
        )}
        </div>
      </div>
    </div>
    );
  }

  // screenshot a final image
  const handleScreenshot = React.useCallback
  (async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => 
  {
    e.preventDefault();
    const targetElement: HTMLElement | null = document.getElementById('screenshotTarget');

    if (targetElement) {
      try {

        const scale: number = 6;
          
        const canvas: HTMLCanvasElement = await html2canvas(targetElement, {
          scale: scale,
          allowTaint: true,
          useCORS: true,
        });

        const enlargedCanvas: HTMLCanvasElement = document.createElement('canvas');
        const context: CanvasRenderingContext2D | null = enlargedCanvas.getContext('2d');
        if (context) {
          enlargedCanvas.width = canvas.width * scale; 
          enlargedCanvas.height = canvas.height * scale; 
          context.drawImage(canvas, 0, 0, enlargedCanvas.width, enlargedCanvas.height);
        } else {
          console.error('2D rendering context is null');
        }    

        const imageDataURL: string = canvas.toDataURL('image/png');
        const downloadLink: HTMLAnchorElement = document.createElement('a');
        downloadLink.href = imageDataURL;
        downloadLink.download = 'pokemonImage.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
      } catch(err) {
        console.error('Error capturing screenshot', err);
        alert(err);
      }
    }
  }, [])
 
    return (

      <main>    
        <Header />

        <div className='container'>
          <img src='/pokeballCenter-cutout.png' alt='pokeballCenterImage' className='pokeballCenter'></img>
          <div className='selectArea'>
            <div className='siteName'>
              <h2>My Favourite Pokemon image generator</h2>
            </div>

            <NumOfPokemon
              selectedOption={selectedOption}
              handleSelectedChange={handleSelectedChange}
              options={options}
            />

            <PokemonDropdown 
              selectedImagesColor={selectedImagesColor}
              handleAllImagesFrameColorChange={handleAllImagesFrameColorChange}
              elements={elements}
            />

            <BackgroundImage 
              selectedOption={selectedOption}
              pokemonData2={pokemonData2}
              selectedImageFrameColors={selectedImageFrameColors}
              selectedHeaderColor={selectedHeaderColor}
              selectHeaderFrameWidth={selectHeaderFrameWidth}
              selectedHeaderFrameColor={selectedHeaderFrameColor}
              writing={writing}
            />

            <div className='headingSetting'>

              <AddingPhrase 
                addingPhrase={addingPhrase}
              />

              <HeaderColor
                selectedHeaderColor={selectedHeaderColor}
                handleHeaderColorChange={handleHeaderColorChange}
              />

              <HeaderFrameColor
                selectedHeaderFrameColor={selectedHeaderFrameColor}
                handleHeaderFrameColorChange={handleHeaderFrameColorChange}
              />

            </div>

            <SaveButton 
              handleScreenshot={handleScreenshot}
            />

            <FAQ />

          </div>
          <Footer />
        </div>
    </main>
    );
};
    
export default Shodai