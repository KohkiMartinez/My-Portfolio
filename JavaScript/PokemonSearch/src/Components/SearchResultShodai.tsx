// SearchResultShodai.tsx

import React from 'react';

const SearchResult: React.FC<{
  searchTermEng: string;
  searchTermNo: string;
}> = React.memo(({ 
  searchTermEng, searchTermNo, 
 }) => {
  return (
  <>
    {/* Display No = 0 */}
    <div className='pokemonInfo'>
      <div className='displayPokemonNoShodaiPokedex'>
        <div className='pokemonNoFixedShodaiPokedex'>No.{searchTermNo} </div>
        <div className='pokemonNameShodaiPokedex'>{searchTermEng}</div>
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

export default SearchResult;