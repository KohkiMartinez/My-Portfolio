// NumOfPokemon.tsx

import React from 'react';
import { ChangeEvent } from 'react';

const NumOfPokemon: React.FC<{
    selectedOption: number;
    handleSelectedChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: string[]
}> = React.memo(({ selectedOption, handleSelectedChange, options }) => {

    return (
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
    );

});

export default NumOfPokemon;