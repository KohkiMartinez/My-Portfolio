import PropTypes from 'prop-types';
import React from 'react';

const SearchResult = React.memo(({ 
  pokemonData, searchTermJP, searchTermNo, displayNo, isShinyVisible, isVarietiesPokemon,
  varietiesPokemonNames, countVarietyNamesNo
 }) => {

  return (
  <>
    {/* Display No = 0 */}
    {displayNo === 0 && isVarietiesPokemon && (
      <div className='pokemonInfo'>
        <div className='displayPokemonNo807'>
          <div className='pokemonNoFixed807'>No: {searchTermNo} </div>
          <div className='pokemonIconContainer'>
            <img src={`/images/PokemonIcons/${+searchTermNo}(${+countVarietyNamesNo}).png`} 
            className='pokemonIcon' alt='Pokemon Icon'/>
          </div>

          <div className='upTriangle'></div>
          <div className='downTriangle'></div>
        </div>
        <div className='pokemonNHW'>
          <div>{varietiesPokemonNames[countVarietyNamesNo]}</div>
        </div>
        
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}

    {displayNo === 0 && !isVarietiesPokemon && (
      <div className='pokemonInfo'>
        <div className='displayPokemonNo807'>
        <div className='pokemonNoFixed807'>No: {searchTermNo} </div>
          <div className='pokemonIconContainer'>
          <img src={`/images/PokemonIcons/${+searchTermNo}(0).png`} 
            className='pokemonIcon' alt='Pokemon Icon'/>
          </div>
          <div className='upTriangle'></div>
          <div className='downTriangle'></div>
        </div>
        <div className='pokemonNHW'>
          <div>{searchTermJP}</div>
        </div>

        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}

    {/* Display No = 1 */}

      {pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent && displayNo === 1 &&
      pokemonData.sprites.versions['generation-i']['red-blue'].front_gray != null && isShinyVisible && (
        <div className='pokemonInfo'>
          <div>Gray</div>

          <div className='pokemonImageContainerS'>
            <img src={pokemonData.sprites.versions['generation-i']['red-blue'].front_gray} 
              alt='Pokemon Image' className='pokemonImages'/>
          </div>

          <div className='downTriangleShiny'></div>
        </div>
    )}
    {pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent && displayNo === 1 &&
      pokemonData.sprites.versions['generation-i']['red-blue'].front_gray != null && isShinyVisible === false && (
        <div className='pokemonInfo'>
          <div className='version'>red&blue ver</div>

          <div className='pokemonImageContainer'>
            <img src={pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent} 
              alt='Pokemon Image' className='pokemonImages'/>
          </div>
          
          <div className='leftTriangle'></div>
          <div className='rightTriangle'></div>
          <div className='upTriangleShiny'></div>
        </div>
    )}

    {pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent && displayNo === 1 && 
      pokemonData.sprites.versions['generation-i']['red-blue'].front_gray === null && (
        <div className='pokemonInfo'>
          <div className='version'>red&blue ver</div>

          <div className='pokemonImageContainer'>
            <img src={pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent} 
            alt='Pokemon Image' className='pokemonImages'/>
          </div>

          <div className='leftTriangle'></div>
          <div className='rightTriangle'></div>
        </div>
    )}

    {/* Display No = 2 */}

    {pokemonData.sprites.versions['generation-i'].yellow.front_transparent && displayNo === 2 && 
      pokemonData.sprites.versions['generation-i'].yellow.front_gray != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Gray</div>
        <div className='pokemonImageContainerS'>
          <img src={pokemonData.sprites.versions['generation-i'].yellow.front_gray} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-i'].yellow.front_transparent && displayNo === 2 && 
      pokemonData.sprites.versions['generation-i'].yellow.front_gray != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Yellow ver</div>
        <div className='pokemonImageContainer'>
          <img src={pokemonData.sprites.versions['generation-i'].yellow.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-i'].yellow.front_transparent && displayNo === 2 && 
      pokemonData.sprites.versions['generation-i'].yellow.front_gray === null && (
      <div className='pokemonInfo'>
        <div className='version'>Yellow ver</div>
        <div className='pokemonImageContainer'>
          <img src={pokemonData.sprites.versions['generation-i'].yellow.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}
  

    {/* Display No = 3 */}

    {pokemonData.sprites.versions['generation-ii'].gold.front_transparent && displayNo === 3 && 
      pokemonData.sprites.versions['generation-ii'].gold.front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer2ndS'>
          <img src={pokemonData.sprites.versions['generation-ii'].gold.front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-ii'].gold.front_transparent && displayNo === 3 && 
      pokemonData.sprites.versions['generation-ii'].gold.front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Gold ver</div>
        <div className='pokemonImageContainer2nd'>
          <img src={pokemonData.sprites.versions['generation-ii'].gold.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-ii'].gold.front_transparent && displayNo === 3 && 
      pokemonData.sprites.versions['generation-ii'].gold.front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Gold ver</div>
        <div className='pokemonImageContainer2nd'>
          <img src={pokemonData.sprites.versions['generation-ii'].gold.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}

    
    {/* Display No = 4 */}

    {pokemonData.sprites.versions['generation-ii'].silver.front_transparent && displayNo === 4 && 
      pokemonData.sprites.versions['generation-ii'].silver.front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer2ndS'>
          <img src={pokemonData.sprites.versions['generation-ii'].silver.front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-ii'].silver.front_transparent && displayNo === 4 && 
      pokemonData.sprites.versions['generation-ii'].silver.front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Silver ver</div>
        <div className='pokemonImageContainer2nd'>
          <img src={pokemonData.sprites.versions['generation-ii'].silver.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-ii'].silver.front_transparent && displayNo === 4 && 
      pokemonData.sprites.versions['generation-ii'].silver.front_shiny === null  && (
      <div className='pokemonInfo'>
        <div className='version'>Silver ver</div>
        <div className='pokemonImageContainer2nd'>
          <img src={pokemonData.sprites.versions['generation-ii'].silver.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}


    {/* Display No = 5 */}

    {pokemonData.sprites.versions['generation-ii'].crystal.front_transparent && displayNo === 5 && 
      pokemonData.sprites.versions['generation-ii'].crystal.front_shiny_transparent != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer2ndC'>
          <img src={pokemonData.sprites.versions['generation-ii'].crystal.front_shiny_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-ii'].crystal.front_transparent && displayNo === 5 && 
      pokemonData.sprites.versions['generation-ii'].crystal.front_shiny_transparent != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Crystal ver</div>
        <div className='pokemonImageContainer2ndC'>
          <img src={pokemonData.sprites.versions['generation-ii'].crystal.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-ii'].crystal.front_transparent && displayNo === 5 && 
      pokemonData.sprites.versions['generation-ii'].crystal.front_shiny_transparent === null && (
      <div className='pokemonInfo'>
        <div className='version'>Crystal ver</div>
        <div className='pokemonImageContainer2ndC'>
          <img src={pokemonData.sprites.versions['generation-ii'].crystal.front_transparent} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}


    {/* Display No = 6 */}
 
    {pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default && displayNo === 6 && 
      pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer3rdG'>
          <img src={pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default && displayNo === 6 && 
      pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Ruby&Sapphire ver</div>
        <div className='pokemonImageContainer3rdG'>
          <img src={pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
        {pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default && displayNo === 6 && 
      pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Ruby&Sapphire ver</div>
        <div className='pokemonImageContainer3rdG'>
          <img src={pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}


    {/* Display No = 7 */}

    {pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default && displayNo === 7 && 
      pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer3rdG'>
          <img src={pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default && displayNo === 7 && 
      pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>FRLG ver</div>
        <div className='pokemonImageContainer3rdG'>
          <img src={pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default && displayNo === 7 && 
      pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>FRLG ver</div>
        <div className='pokemonImageContainer3rdG'>
          <img src={pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}


    {/* Display No = 8 */}

    {pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default && displayNo === 8 && 
      pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer4thG'>
          <img src={pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default && displayNo === 8 && 
      pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Diamond&Pearl ver</div>
        <div className='pokemonImageContainer4thG'>
          <img src={pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default && displayNo === 8 && 
      pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Diamond&Pearl ver</div>
        <div className='pokemonImageContainer4thG'>
          <img src={pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}
  

    {/* Display No = 9 */}

    {pokemonData.sprites.versions['generation-iv'].platinum.front_default && displayNo === 9 && 
      pokemonData.sprites.versions['generation-iv'].platinum.front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer4thG'>
          <img src={pokemonData.sprites.versions['generation-iv'].platinum.front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iv'].platinum.front_default && displayNo === 9 && 
      pokemonData.sprites.versions['generation-iv'].platinum.front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Platinum ver</div>
        <div className='pokemonImageContainer4thG'>
          <img src={pokemonData.sprites.versions['generation-iv'].platinum.front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iv'].platinum.front_default && displayNo === 9 && 
      pokemonData.sprites.versions['generation-iv'].platinum.front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Platinum ver</div>
        <div className='pokemonImageContainer4thG'>
          <img src={pokemonData.sprites.versions['generation-iv'].platinum.front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}


    {/* Display No = 10 */}

    {pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default && displayNo === 10 && 
      pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer45thG'>
          <img src={pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default && displayNo === 10 && 
      pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>HGSS ver</div>
        <div className='pokemonImageContainer45thG'>
          <img src={pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default && displayNo === 10 && 
      pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>HGSS ver</div>
        <div className='pokemonImageContainer45thG'>
          <img src={pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}
 

    {/* Display No = 11 */}
 
    {pokemonData.sprites.versions['generation-v']['black-white'].front_default && displayNo === 11 && 
      pokemonData.sprites.versions['generation-v']['black-white'].front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer5thG'>
          <img src={pokemonData.sprites.versions['generation-v']['black-white'].front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-v']['black-white'].front_default && displayNo === 11 && 
      pokemonData.sprites.versions['generation-v']['black-white'].front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Black&White ver</div>
        <div className='pokemonImageContainer5thG'>
          <img src={pokemonData.sprites.versions['generation-v']['black-white'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-v']['black-white'].front_default && displayNo === 11 && 
      pokemonData.sprites.versions['generation-v']['black-white'].front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Black&White ver</div>
        <div className='pokemonImageContainer5thG'>
          <img src={pokemonData.sprites.versions['generation-v']['black-white'].front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}


    {/* Display No = 12 */}

    {pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default && displayNo === 12 && 
      pokemonData.sprites.versions['generation-v']['black-white'].animated.front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainer5thGAni'>
          <img src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_shiny} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default && displayNo === 12 && 
      pokemonData.sprites.versions['generation-v']['black-white'].animated.front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Animation ver</div>
        <div className='pokemonImageContainer5thGAni'>
          <img src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default && displayNo === 12 && 
      pokemonData.sprites.versions['generation-v']['black-white'].animated.front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Animation ver</div>
        <div className='pokemonImageContainer5thGAni'>
          <img src={pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default} 
          alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}
  

    {/* Display No = 13 */}
    {pokemonData.sprites.front_default && displayNo === 13 && 
      pokemonData.sprites.front_shiny != null && isShinyVisible && (
      <div className='pokemonInfo'>
        <div>Shiny</div>
        <div className='pokemonImageContainerD'>
          <img src={pokemonData.sprites.front_shiny} alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='downTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.front_default && displayNo === 13 && 
      pokemonData.sprites.front_shiny != null && isShinyVisible === false && (
      <div className='pokemonInfo'>
        <div className='version'>Default ver</div>
        <div className='pokemonImageContainerD'>
          <img src={pokemonData.sprites.front_default} alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
        <div className='upTriangleShiny'></div>
      </div>
    )}
    {pokemonData.sprites.front_default && displayNo === 13 && 
      pokemonData.sprites.front_shiny === null && (
      <div className='pokemonInfo'>
        <div className='version'>Default ver</div>
        <div className='pokemonImageContainerD'>
          <img src={pokemonData.sprites.front_default} alt='Pokemon Image' className='pokemonImages'/>
        </div>
        <div className='leftTriangle'></div>
        <div className='rightTriangle'></div>
      </div>
    )}

  </>
  )
});
SearchResult.displayName = 'SearchResult';
SearchResult.propTypes = {
  pokemonData: PropTypes.shape({
      height: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      sprites: PropTypes.shape({
          front_default: PropTypes.string.isRequired,
          front_female: PropTypes.string,
          front_shiny: PropTypes.string,
          versions: PropTypes.shape({
            ['generation-i']: PropTypes.shape({
              ['red-blue']: PropTypes.shape({
                front_transparent: PropTypes.string.isRequired,
                front_gray: PropTypes.string.isRequired,
              }),
              yellow: PropTypes.shape({
                front_transparent: PropTypes.string.isRequired,
                front_gray: PropTypes.string.isRequired,
              })
            }),
            ['generation-ii']: PropTypes.shape({
              crystal: PropTypes.shape({
                front_transparent: PropTypes.string.isRequired,
                front_shiny_transparent: PropTypes.string.isRequired,
              }),
              gold: PropTypes.shape({
                front_transparent: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              }),
              silver: PropTypes.shape({
                front_transparent: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              })
            }),
            ['generation-iii']: PropTypes.shape({
              emerald: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
              }),
              ['firered-leafgreen']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              }),
              ['ruby-sapphire']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              })
            }),
            ['generation-iv']: PropTypes.shape({
              ['diamond-pearl']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              }),
              ['heartgold-soulsilver']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              }),
              platinum: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              })
            }),
            ['generation-v']: PropTypes.shape({
              ['black-white']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
                animated: PropTypes.shape({
                  front_default: PropTypes.string.isRequired,
                  front_shiny: PropTypes.string.isRequired,
                }),
              }),
            }),
            ['generation-vi']: PropTypes.shape({
              ['omegaruby-alphasapphire']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              }),
              ['x-y']: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
                front_shiny: PropTypes.string.isRequired,
              })
            }),
            ['generation-vii']: PropTypes.shape({
              icons: PropTypes.shape({
                front_default: PropTypes.string.isRequired,
              })
            })
            
          })
      }).isRequired,
  })
};
  SearchResult.propTypes = {
    searchTerm: PropTypes.string.isRequired
  }
  SearchResult.propTypes = {
  searchTermJP: PropTypes.string.isRequired
  }
  SearchResult.propTypes = {
  searchTermNo: PropTypes.string.isRequired
  }
  SearchResult.propTypes = {
    displayNo: PropTypes.number.isRequired
  }
  SearchResult.propTypes = {
    isShinyVisible: PropTypes.bool.isRequired
  }
  SearchResult.propTypes = {
    isVarietiesPokemon: PropTypes.array
  }
  SearchResult.propTypes = {
    varietiesPokemonNames: PropTypes.array
  }
  SearchResult.propTypes = {
    countVarietyNamesNo: PropTypes.number
  }

export default SearchResult;
