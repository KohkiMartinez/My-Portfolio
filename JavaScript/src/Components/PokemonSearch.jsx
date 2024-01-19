import PropTypes from 'prop-types';
import React from 'react';

const PokemonSearch = React.memo(({ onSearch }) => (
    <div>
        <label htmlFor='pokemonSearch' className='pokemonLabel'>Search Pokemon: </label>
        <input id='pokemonSearch' type='text' onChange={onSearch} />
    </div>
));
PokemonSearch.displayName = 'PokemonSearch'

PokemonSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
};  


export default PokemonSearch;
