// PokemonSearch.tsx

import React from 'react';

const PokemonSearch:React.FC<{
    onSearch: React.ChangeEventHandler<HTMLInputElement>;
}> = React.memo(({ onSearch }) => (
    <div>
        <label htmlFor='pokemonSearch' className='pokemonLabel'>Search Pokemon: </label>
        <input id='pokemonSearch' type='text' onChange={onSearch} />
    </div>
));

export default PokemonSearch;
