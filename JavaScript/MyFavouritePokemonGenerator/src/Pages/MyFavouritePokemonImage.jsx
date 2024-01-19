import * as React from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';

import Data from '../Json/scrapedData.json';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Shodai = () => {

  const [selectedOption, setSelectedOption] = React.useState(0);
  const options = [
    '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18'
  ];

  const handleShiny = (index) => {
    setPokemonData2(prevData => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        isShiny: !pokemonData2[index].isShiny
      }
    }))
  }

  const handleSelectedChange = (e) => {
    setSelectedOption(+e.target.value);
  };

  // adding header
  const [writing, setWriting] = React.useState('My Favourite Pokemon')
  const onPut = (e) => {
    e.preventDefault();
    const inputWriting = e.target.value;
    setWriting(inputWriting);
  } 
  // Changing header (header frame) color
  const [selectedHeaderColor, setSelectedHeaderColor] = React.useState('#1c0080')
  const handleHeaderColorChange = (e) => {
    setSelectedHeaderColor(e.target.value);
  }

  const [selectedHeaderFrameColor, setSelectedHeaderFrameColor] = React.useState('#ffffff')
  const handleHeaderFrameColorChange = (e) => {
    setSelectedHeaderFrameColor(e.target.value);
  }

  const [selectHeaderFrameWidth, setSelectHeaderFrameWidth] = React.useState(1.0);

  React.useEffect(() => {
    handleWidthChange();
  }, []);

  const handleWidthChange = () => {
    const newWidth = window.innerWidth <= 700 ? 0.5 : 1;
    setSelectHeaderFrameWidth(newWidth);
  };

  // adding pokemon Images
  const elements = [];
  const [selectedImagesColor, setSelectedImagesColor] = React.useState('#1c0080')

  // Image frame color
  const [selectedImageFrameColors, setSelectedImageFrameColors] = React.useState({
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
  })

  // Pokemon Name
  const [selectedPokemon, setSelectedPokemon] = React.useState({
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
  })

  // Pokemon Data from PokeAPI
  const [pokemonData2, setPokemonData2] = React.useState({
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
  })

  const handleImagesColorChange = async(e) => {
    setSelectedImagesColor(e.target.value);

    for (let i = 0; i < +selectedOption; i++) {
      setSelectedImageFrameColors(prevData => ({
        ...prevData,
        [i]: {
          imageFrameColor: e.target.value
        }
      }))
    }
  }

  const handleImageFrameColorChange = (index) => async(e) => {
    setSelectedImageFrameColors(prevData => ({
      ...prevData,
      [index]: {
        imageFrameColor: e.target.value
      }
    }))
  }

  const handleSubmit2 = (index) => async(e) => {
    setSelectedPokemon(prevData => ({
      ...prevData,
      [index]: {
        shownPokemonName: e.target.value
      }
    }))
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value.toLocaleLowerCase()}`);
        const data = await response.json();

        if (data.sprites !== undefined) {
          const imageData = data.sprites.other['official-artwork']
          setPokemonData2(prevData => ({
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
  const handleScreenshot = async() => {
    const targetElement = document.getElementById('screenshotTarget');

    if (targetElement) {
      try {

        const scale = 6;
          
        const canvas = await html2canvas(targetElement, {
          scale: scale,

          allowTaint: true,
          useCORS: true,
            
        });

        const enlargedCanvas = document.createElement('canvas');
        const context = enlargedCanvas.getContext('2d');
        enlargedCanvas.width = canvas.width * scale; 
        enlargedCanvas.height = canvas.height * scale; 
        context.drawImage(canvas, 0, 0, enlargedCanvas.width, enlargedCanvas.height);
    


        const imageDataURL = canvas.toDataURL('image/png');

        const downloadLink = document.createElement('a');
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
  }
 
    return (

      <main>    
        <Header />

        <div className='container'>
          <img src='/pokeballCenter-cutout.png' alt='pokeballCenterImage' className='pokeballCenter'></img>
          <div className='selectArea'>
            
            <div className='siteName'>
              <h2>My Favourite Pokemon image generator</h2>
            </div>
            <div className='chooseNoOfPokemonContainer' >
              <label htmlFor='dropdown'>How many pokemon?: </label>
              <select id='dropdown' value={selectedOption} onChange={handleSelectedChange}>
                <option value="" className='select'>Select...</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className='chosenNoOfPokemon'>No of Pokemon: {selectedOption}</div>
            </div>
            <div className='pokemonDropdownContainer'>
              <div>
              <label htmlFor='imagesColorInput'>Colour: </label>
                <input 
                  type='color'
                  id='imagesColorInput'
                  value={selectedImagesColor}
                  onChange={handleImagesColorChange}
                />
              </div>
              <div className='pokemonDropdowns'>
                {elements}
              </div>
            </div>

 

            <div className='backgroundImageContainer'>

              <div id='screenshotTarget'>

                <img src='/test2.jpg' alt='backgroundImage' className='backgroundImage'></img>
                <div className='selectedPokemonImagesOnBackground'>
                  {selectedOption > 0 && selectedOption === 1 && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_one'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_one'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_one'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && selectedOption === 2 && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_two'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_two'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_two'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && selectedOption === 3 && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_three'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_three'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_three'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && selectedOption === 4 && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_four'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_four'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_four'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && (selectedOption === 6 || selectedOption === 5) && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_five_'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_five_'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_five_'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && (selectedOption === 8 || selectedOption === 7) && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_seven_'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_seven_'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_seven_'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && (selectedOption === 9 || selectedOption === 10) && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_nine_'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_nine_'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_nine_'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && (selectedOption === 11 || selectedOption === 12) && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_eleven_'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_eleven_'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_eleven_'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {selectedOption > 0 && (selectedOption === 13 || selectedOption ===14 || selectedOption === 15) && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_thirteen__'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_thirteen__'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_thirteen__'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  
                  {selectedOption > 0 && (selectedOption === 16 || selectedOption === 17 || selectedOption === 18) && (
                    <>
                      {Array.from({ length: selectedOption}).map((_, index) => (
                        <div key={index} className='selectedPokemonImagesOnBackgroundEachContainer_sixteen__'>
                          {pokemonData2[index].isShiny === true ? (
                            <img key={index} src={pokemonData2[index].shiny} alt='Pokemon Image'
                             className='pokemonImageEach_sixteen__'></img>
                          ): (
                            <img key={index} src={pokemonData2[index].sprites} alt='Pokemon Image'
                             className='pokemonImageEach_sixteen__'></img>
                          )}
                          <div className='pokemonImageFrameTop'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                          <div className='pokemonImageFrameBottom'
                            style={{backgroundColor: `${selectedImageFrameColors[index].imageFrameColor}`}}>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <div className='headingOnBackgroundImage' 
                  style={{ 
                    color: `${selectedHeaderColor}`,
                    WebkitTextStroke: `${selectHeaderFrameWidth}px ${selectedHeaderFrameColor}`
                  }}
                >
                  {writing}
                </div>
              </div>
            </div>

            <div className='headingSetting'>
              <label htmlFor='pokemonSearch' className='pokemonLabel'>Add your phrase: </label>
              <input id='pokemonSearch' type='text' onChange={onPut}/>
              <div className='headingExamples'>
                <div>Eg: My favourite shiny pokemon</div>
                <div>  I&apos;m looking for these shiny pokemon</div>
                <div>  My favourite pokemon in battle  etc</div>
              </div>

              <label htmlFor='headerColorInput'>Choose colour: </label>
                <input 
                  type='color'
                  id='headerColorInput'
                  value={selectedHeaderColor}
                  onChange={handleHeaderColorChange}
                />

              <label htmlFor='headerFrameColorInput'>    </label>
                <input 
                  type='color'
                  id='headerFrameColorInput'
                  value={selectedHeaderFrameColor}
                  onChange={handleHeaderFrameColorChange}
                />

            </div>
            
            <div className='saveButtonContainer'>
              <button onClick={handleScreenshot} className='saveButton'>Save image</button>
            </div>

            <div className='FAQWrapper'>
              <h2>よくあるご質問 (FAQ)</h2>

              <div className='FAQs'>
                <h3>このサイトは何をするサイトですか？</h3>
                <div>
                  このサイトでは、自分の好きなポケモンの画像を簡単に作成することができるサイトです。
                </div>
                <div>
                  作成した画像はX(Twitter)などのSNSで、自己紹介画像として使うこともできます。
                </div>
              </div>

              <div className='FAQs'>
                <h3>どのように使えばいいですか？</h3>
                <div>
                  追加したいポケモンの数を選んで、その次に追加したいポケモンをリストから選びます。
                </div>
                <div>
                  追加したい言葉やフレーズを選ぶこともできます。
                </div>
                <div>
                  最後に”画像を保存”を押せば、画像をお使いのデバイスに保存できます。
                </div>
                <div>
                  さらに詳しい使い方については、<Link to='/howto'>&quot;使い方&quot;</Link>をご確認ください。
                </div>
              </div>
              
              <div className='FAQs'>
                <h3>画像のダウンロードにどのくらい時間がかかりますか？</h3>
                <div>
                  画像のダウンロード時間は、お使いのWifi速度によって変わります。
                  しかし、このサイトはSPAというタイプのサイトで、画像の読み込み速度やダウンロード速度は
                  他のサイトよりも比較的に速いです。
                  
                </div>
              </div>

              <div className='FAQs'>
                <h3>作成できる画像の制限はありますか？</h3>
                <div>
                  いいえ。画像はいつでもお好きなだけ作成可能です。
                </div>
              </div>
              
              <div className='FAQs'>
                <h3>Any other questions, please contact us from 
                <Link to='/contact'> Here</Link>.</h3>
              </div>
            </div>

          </div>
          
          <Footer />

        </div>

 
    </main>
    );
};
    
export default Shodai