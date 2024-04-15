// hooks useHandleSubmit.tsx
import React from 'react';
import { ChangeEvent } from 'react';

import type { PokemonData2 } from '../Types/PokemonData2';

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

type SelectedPokemon = {
    [key: number]: {
      shownPokemonName: string
    };
  };
  type ImageData = {
    front_default: string,
    front_shiny: string
  };

const useHandleSubmit = (            
  setSelectedPokemon: React.Dispatch<React.SetStateAction<SelectedPokemon>>, 
  setPokemonData2: React.Dispatch<React.SetStateAction<PokemonData2>>
) => {
    
    const handleSubmit = async(
      index: number, 
      pokemonData2: PokemonData2, 
      e: ChangeEvent<HTMLSelectElement>
      ) => {
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
                  isShiny: pokemonData2[index]?.isShiny,
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
        };
      };

    return {
        handleSubmit
    }
};

export default useHandleSubmit;