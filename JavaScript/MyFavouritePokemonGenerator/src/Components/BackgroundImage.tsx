// BackgroundImage.tsx

import React from 'react';

import type { PokemonData2 } from '../Types/PokemonData2';
import type { SelectedImageFrameColors } from '../Types/SelectedImageFrameColors';

const BackgroundImage: React.FC<{
    selectedOption: number;
    pokemonData2: PokemonData2;
    selectedImageFrameColors: SelectedImageFrameColors;
    selectedHeaderColor: string;
    selectHeaderFrameWidth: number;
    selectedHeaderFrameColor: string;
    writing: string;
}> = React.memo(({ 
    selectedOption, 
    pokemonData2, 
    selectedImageFrameColors, 
    selectedHeaderColor, 
    selectHeaderFrameWidth,
    selectedHeaderFrameColor,
    writing
 }) => 
{
    return (

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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
                        ))};
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
    );

});

export default BackgroundImage;