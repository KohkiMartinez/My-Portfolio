// PokemonDropdown.tsx
import React from 'react';
import { ChangeEvent } from 'react';

const PokemonDropdown: React.FC<{
    selectedImagesColor: string;
    handleAllImagesFrameColorChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    elements: React.ReactNode[]
}> = React.memo(({ selectedImagesColor, handleAllImagesFrameColorChange, elements }) => 
{

    return (
        <div className='pokemonDropdownContainer'>
            <div>
            <label htmlFor='imagesColorInput'>Colour: </label>
            <input 
                type='color'
                id='imagesColorInput'
                value={selectedImagesColor}
                onChange={handleAllImagesFrameColorChange}
            />
            </div>
            <div className='pokemonDropdowns'>
                {elements}
            </div>
        </div>
    );

});

export default PokemonDropdown;