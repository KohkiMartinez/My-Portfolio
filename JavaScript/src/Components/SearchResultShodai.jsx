import PropTypes from 'prop-types';
import React from 'react';

const SearchResult = React.memo(({ 
  searchTermJP, searchTermNo, 
 }) => {

  return (
  <>
    {/* Display No = 0 */}
    <div className='pokemonInfo'>
      <div className='displayPokemonNoShodaiPokedex'>
        <div className='pokemonNoFixedShodaiPokedex'>No.{searchTermNo} </div>
        <div className='pokemonNameShodaiPokedex'>{searchTermJP}</div>
        <div className='upTriangleShodaiPokedex'></div>
        <div className='downTriangleShodaiPokedex'></div>
      </div>
      <div className='pokemonImagesWrapperShodaiPokedex'>
        <div className='pokemonImagesContainerShodaiPokedex'>
          <img src={`/images/shodaiPokemonImages/${+searchTermNo}.png`} 
              alt='Pokemon Image' className='pokemonImagesShodaiPokedex'/>
        </div>
      </div>
    </div>
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