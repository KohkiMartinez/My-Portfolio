// useSharedPokemonData.tsx

import * as React from 'react';

import type { PokemonData } from '../Types/PokemonData';
import type { CheckingPokemonNullData } from '../Types/CheckingPokemonNullData';
import type { CheckingShinyPokemonNullData } from '../Types/CheckingShinyPokemonNullData';

import Data from '../json/scrapedData.json';

const useSharedPokemonData = (

) => {

    const confirmSound: HTMLAudioElement | null = document.getElementById('confirmSound') as HTMLAudioElement ;
    const bottonPushSound: HTMLAudioElement | null = document.getElementById('bottonPushSound') as HTMLAudioElement;

    const [searchTerm, setSearchTerm] = React.useState<string>(
        localStorage.getItem('searchedPokemon') || 'pikachu'
    );
    const [searchTermJP, setSearchTermJP] = React.useState(
        localStorage.getItem('searchedPokemonJP') || 'ピカチュウ'
    )
    const [searchTermNo, setSearchTermNo] = React.useState(
        localStorage.getItem('searchedPokemonNo') || '0025'
    )

    const storedPokemonPositionNo = localStorage.getItem('currentPokemonPositionNo');
    const defaultPokemonPositionNo = storedPokemonPositionNo ? parseInt(storedPokemonPositionNo, 10) : 24;
    const [currentPokemonPositionNo, setCurrentPokemonPositionNo] = React.useState<number>(defaultPokemonPositionNo);
    // const [currentPokemonPositionNo, setCurrentPokemonPositionNo] = React.useState<number>(
    //   localStorage.getItem('currentPokemonPositionNo') || 24
    // )

    const [loading, setLoading] = React.useState(false);

    const [pokemonData, setPokemonData] = React.useState<PokemonData>({
        sprites: {
            front_default: '',
            front_female: '',
            front_shiny: '',
            versions: {
                'generation-i': {
                    ['red-blue']: {
                        front_transparent: '',
                        front_gray: '',
                    },
                    yellow: {
                        front_transparent: '',
                        front_gray: '',
                    },
                },
                'generation-ii': {
                    crystal: {
                        front_transparent: '',
                        front_shiny_transparent: '',
                    },
                    gold: {
                        front_transparent: '',
                        front_shiny: '',
                    },
                    silver: {
                        front_transparent: '',
                        front_shiny: '',
                    }
                },
                'generation-iii': {
                    emerald: {
                        front_default: '',
                    },
                    ['firered-leafgreen']: {
                        front_default: '',
                        front_shiny: '',
                    },
                    ['ruby-sapphire']: {
                        front_default: '',
                        front_shiny: '',
                    }
                },
                'generation-iv': {
                    ['diamond-pearl']: {
                        front_default: '',
                        front_shiny: '',
                    },
                    ['heartgold-soulsilver']: {
                        front_default: '',
                        front_shiny: '',
                    },
                    platinum: {
                        front_default: '',
                        front_shiny: '',
                    }
                },
                'generation-v': {
                    ['black-white']: {
                        front_default: '',
                        front_shiny: '',
                        animated: {
                        front_default: '',
                        front_shiny: '',
                        },
                    },
                },
                'generation-vi': {
                    ['omegaruby-alphasapphire']: {
                        front_default: '',
                        front_shiny: '',
                    },
                    ['x-y']: {
                        front_default: '',
                        front_shiny: '',
                    }
                },
                'generation-vii': {
                    icons: {
                        front_default: '',
                    }
                }
            }
        }
    });

    const [jsonData, setJsonData] = React.useState<object>([]);

    const [userInput, setUserInput] = React.useState('');

    const [displayNo, setDisplayNo] = React.useState(0);

    React.useEffect(() => {
        setLoading(true);
        
        const controller = new AbortController();
        const signal = controller.signal;
    
        const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLocaleLowerCase()}`, { signal });
            const data = await response.json();
            setPokemonData({
            sprites: data.sprites
            });
        } catch (err: unknown) {
            if (err instanceof Error) {
            if (err.name === 'AbortError') {
                console.log('Fetch is Cancelled');
            } else {
                console.log('Error fetching Pokemon: ', err);
                setPokemonData({
                sprites: {
                    front_default: '',
                    front_female: '',
                    front_shiny: '',
                    versions: {
                    'generation-i': {
                        'red-blue': {
                        front_transparent: '',
                        front_gray: '',
                        },
                        yellow: {
                        front_transparent: '',
                        front_gray: '',
                        },
                    },
                    'generation-ii': {
                        crystal: {
                        front_transparent: '',
                        front_shiny_transparent: '',
                        },
                        gold: {
                        front_transparent: '',
                        front_shiny: '',
                        },
                        silver: {
                        front_transparent: '',
                        front_shiny: '',
                        },
                    },
                    'generation-iii': {
                        emerald: {
                        front_default: '',
                        },
                        'firered-leafgreen': {
                        front_default: '',
                        front_shiny: '',
                        },
                        'ruby-sapphire': {
                        front_default: '',
                        front_shiny: '',
                        },
                    },
                    'generation-iv': {
                        'diamond-pearl': {
                        front_default: '',
                        front_shiny: '',
                        },
                        'heartgold-soulsilver': {
                        front_default: '',
                        front_shiny: '',
                        },
                        platinum: {
                        front_default: '',
                        front_shiny: '',
                        },
                    },
                    'generation-v': {
                        'black-white': {
                        front_default: '',
                        front_shiny: '',
                        animated: {
                            front_default: '',
                            front_shiny: '',
                        },
                        },
                    },
                    'generation-vi': {
                        'omegaruby-alphasapphire': {
                        front_default: '',
                        front_shiny: '',
                        },
                        'x-y': {
                        front_default: '',
                        front_shiny: '',
                        },
                    },
                    'generation-vii': {
                        icons: {
                        front_default: '',
                        },
                    },
                    },
                },
                });
            }
            }
        } finally {
            setLoading(false);
        }
        };
        
        fetchPokemon();
        setIsShinyVisible(false);
        setCountVarietyNamesNo(0)
        setVarietiesNo(0)

        return () => {
        controller.abort();
        };
    }, [searchTerm]);
        
    const handleSubmit = () => {

        if (confirmSound.paused) {
        confirmSound.play();      
        } else {
            confirmSound.pause();
            confirmSound.currentTime = 0
            confirmSound.play();
        }

        try {
        // const translatedPokemonName = jsonData.length > 0 ? jsonData.filter((jd) => {
            const translatedPokemonName = Array.isArray(jsonData) ? jsonData.filter((jd) => {
            return jd.name_jp.length === userInput.length && jd.name_jp === userInput;
        }) : [];

        setSearchTermJP(translatedPokemonName[0].name_jp);
        setSearchTermNo(translatedPokemonName[0].No);
        setSearchTerm(translatedPokemonName[0].name_eg);
        setCurrentPokemonPositionNo(+translatedPokemonName[0].No - 1)

        localStorage.setItem('searchedPokemon', translatedPokemonName[0].name_eg);
        localStorage.setItem('searchedPokemonJP', translatedPokemonName[0].name_jp);
        localStorage.setItem('searchedPokemonNo', translatedPokemonName[0].No);
        localStorage.setItem('currentPokemonPositionNo', (+translatedPokemonName[0].No - 1).toString());
        // localStorage.setItem('currentPokemonPositionNo', +translatedPokemonName[0].No - 1);
            
        } catch(err) {
            console.log('Error fetching Pokemon: ', err);
        }
    };

    React.useEffect(() => {
        const fetchJsonData = async() => {
            await new Promise(resolve => setTimeout(resolve, 100));
            const dummyData = Data;
            setJsonData(dummyData);
        };
        fetchJsonData();
    }, []);

    const handleSearch: React.ChangeEventHandler<HTMLInputElement> = React.useCallback((e) => {
        e.preventDefault();
        const inputValueJP = e.target.value;
        setUserInput(inputValueJP);
    },[])

    const [allAvailableDisplayNoArray, setAllAvailableDisplayNoArray] = React.useState<number[]>([]);

    const [allAvailableDisplayNoArrayShiny, setAllAvailableDisplayNoArrayShiny] = React.useState<number[]>([]);

    const [noOfDisplay, setNoOfDisplay] = React.useState<number>(0);

    React.useEffect(() => {
        const countDisplayNo = () => {

        if (pokemonData.sprites !== undefined && Object.keys(pokemonData.sprites).length !== 0) {
            const checkingPokemonNullData: CheckingPokemonNullData = {
            redblue: pokemonData.sprites.versions['generation-i']['red-blue'].front_transparent,
            yellow: pokemonData.sprites.versions['generation-i'].yellow.front_transparent,

            gold: pokemonData.sprites.versions['generation-ii'].gold.front_transparent,
            silver: pokemonData.sprites.versions['generation-ii'].silver.front_transparent,
            crystal: pokemonData.sprites.versions['generation-ii'].crystal.front_transparent,

            rubysapphire: pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_default,
            // emerald: pokemonData.sprites.versions['generation-iii'].emerald.front_default,
            fRedlGreen: pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_default,
            

            diamondpearl: pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_default,
            platinum: pokemonData.sprites.versions['generation-iv'].platinum.front_default,
            heartgoldsoulsilver: pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default,


            blackwhite: pokemonData.sprites.versions['generation-v']['black-white'].front_default,
            blackwhiteAnime: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,

            // xy: pokemonData.sprites.versions['generation-vi']['x-y'].front_default,
            // omegarubyalphasapphire: pokemonData.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default,

            default: pokemonData.sprites.front_default

            };

            const checkingShinyPokemonNullData: CheckingShinyPokemonNullData = {
            rebblueGray: pokemonData.sprites.versions['generation-i']['red-blue'].front_gray,
            yellowGray: pokemonData.sprites.versions['generation-i'].yellow.front_gray,

            goldShiny: pokemonData.sprites.versions['generation-ii'].gold.front_shiny,
            silverShiny: pokemonData.sprites.versions['generation-ii'].silver.front_shiny,
            crystalShiny: pokemonData.sprites.versions['generation-ii'].crystal.front_shiny_transparent,

            rubysapphireShiny: pokemonData.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny,
            fRedlGreenShiny: pokemonData.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny,

            diamondpearlShiny: pokemonData.sprites.versions['generation-iv']['diamond-pearl'].front_shiny,
            platinumShiny: pokemonData.sprites.versions['generation-iv'].platinum.front_shiny,
            heartgoldsoulsilverShiny: pokemonData.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny,

            blackwhiteShiny: pokemonData.sprites.versions['generation-v']['black-white'].front_shiny,
            blackwhiteAnimeShiny: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_shiny,

            // xyShiny:  pokemonData.sprites.versions['generation-vi']['x-y'].front_shiny,
            // omegarubyalphasapphireShiny: pokemonData.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny,

            defaultShiny: pokemonData.sprites.front_shiny

            }
        
            const availableDisplayNoArray = [];
            let counter = 1;

        
            for (const key in checkingPokemonNullData) {
            if (checkingPokemonNullData[key] !== null) {
                availableDisplayNoArray.push( counter );
            }
            counter++;
            }
            availableDisplayNoArray.unshift(0);

            const availableDisplayNoArrayShiny = [];
            let counterS = 1

            for (const key in checkingShinyPokemonNullData) {
            if (checkingShinyPokemonNullData[key] !== null) {
                availableDisplayNoArrayShiny.push( counterS );
            }
            counterS++;
            }
            availableDisplayNoArrayShiny.unshift(0);

            setAllAvailableDisplayNoArray(availableDisplayNoArray);
            setNoOfDisplay(availableDisplayNoArray.length);
            setAllAvailableDisplayNoArrayShiny(availableDisplayNoArrayShiny);

        } else {
            setAllAvailableDisplayNoArray([0]);
            setNoOfDisplay(1);
        }
        };

        countDisplayNo();
    }, [pokemonData]);

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        setDisplayNo(allAvailableDisplayNoArray[currentIndex])
    }, [currentIndex, allAvailableDisplayNoArray]);

    const goRightButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (bottonPushSound.paused) {
        bottonPushSound.play();
        } else {
        bottonPushSound.pause();
        bottonPushSound.currentTime = 0;
        bottonPushSound.play();
        }
    
        if (currentIndex !== noOfDisplay - 1 && isShinyVisible === false) {
        setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === noOfDisplay - 1 && isShinyVisible === false) {
        setCurrentIndex(0);
        }
    };

    const goLeftButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (bottonPushSound.paused) {
        bottonPushSound.play();
        } else {
        bottonPushSound.pause();
        bottonPushSound.currentTime = 0;
        bottonPushSound.play();
        }
    
        if (currentIndex !== 0 && isShinyVisible === false) {
        setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 0 && isShinyVisible === false) {
        setCurrentIndex(noOfDisplay - 1);
        }
    };

    // isVarietiesPokeom is an array.
    // The data is extracted from json file and if pokeon has varieties, isVarietiesPokeon will 
    // become an array, otherwise its undefined.
    // array => That pokeon has some varieties, undefined => no varieties
    const [isVarietiesPokemon, setIsVarietiesPokemon] = React.useState<string[]>([]);

    // varietiesPokemonNames are array, data from json file. Display these name on screen.
    const [varietiesPokemonNames, setVarietiesPokemonNames] = React.useState<string[]>([]);

    const [totalNoOfVarieties, setTotalNoOfVarieties] = React.useState(0);

    React.useEffect(() => {
        const fetchPokenoData2 = async() => {
        if (Array.isArray(jsonData)) {
            setSearchTerm(jsonData[currentPokemonPositionNo] !== undefined ? jsonData[currentPokemonPositionNo].name_eg : '');
            
            setSearchTermJP(jsonData[currentPokemonPositionNo] !== undefined ? jsonData[currentPokemonPositionNo].name_jp : '');
            setSearchTermNo(jsonData[currentPokemonPositionNo] !== undefined ? jsonData[currentPokemonPositionNo].No : '');
            // console.log(jsonData[currentPokemonPositionNo].No);
            
            localStorage.setItem('currentPokemonPositionNo', currentPokemonPositionNo.toString());
            localStorage.setItem('searchedPokemon', jsonData[currentPokemonPositionNo] !== undefined ? jsonData[currentPokemonPositionNo].name_eg : '');
            localStorage.setItem('searchedPokemonJP', jsonData[currentPokemonPositionNo] !== undefined ? jsonData[currentPokemonPositionNo].name_jp : '');
            localStorage.setItem('searchedPokemonNo', jsonData[currentPokemonPositionNo] !== undefined ? jsonData[currentPokemonPositionNo].No : '');

            if (jsonData[currentPokemonPositionNo] !== undefined) {
            if (jsonData[currentPokemonPositionNo].varieties) {
                setIsVarietiesPokemon(jsonData[currentPokemonPositionNo].varieties);
                setVarietiesPokemonNames(jsonData[currentPokemonPositionNo].varietyNames);
                setTotalNoOfVarieties(jsonData[currentPokemonPositionNo].varieties.length);
            } else {
                setIsVarietiesPokemon([]);
                setVarietiesPokemonNames([]);
                setTotalNoOfVarieties(0);
            }
            }

        }
        }
        fetchPokenoData2();
    }, [currentPokemonPositionNo, jsonData]);

    //   "varieties": [
    //     "10234",
    //     "qwilfish"
    // ],
    // "varietyNames": [
    //     "ハリーセン",
    //     "ヒスイ"
    // ]

    const [isShinyVisible, setIsShinyVisible] = React.useState(false);

    const goUpButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (bottonPushSound.paused) {
        bottonPushSound.play();
        } else {
        bottonPushSound.pause();
        bottonPushSound.currentTime = 0;
        bottonPushSound.play();
        }
    
        if (displayNo === 0) {
        if (searchTermNo === '1017') {
            setCurrentPokemonPositionNo(0);
        } else {
            setCurrentPokemonPositionNo(+currentPokemonPositionNo + 1);
        }
        } else if (displayNo > 0 && isShinyVisible === false && displayNo === allAvailableDisplayNoArrayShiny[currentIndex]) {
        setIsShinyVisible(!isShinyVisible);
        }
    };
    
    const goDownButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        if (bottonPushSound.paused) {
        bottonPushSound.play();
        } else {
        bottonPushSound.pause();
        bottonPushSound.currentTime = 0;
        bottonPushSound.play();
        }
    
        if (displayNo === 0) {
        if (searchTermNo === '0001') {
            setCurrentPokemonPositionNo(1016);
        } else {
            setCurrentPokemonPositionNo(+currentPokemonPositionNo - 1);
        }
        } else if (displayNo !== 0 && isShinyVisible === true && displayNo === allAvailableDisplayNoArrayShiny[currentIndex]) {
        setIsShinyVisible(!isShinyVisible);
        }
    };
    
    const [varietiesNo, setVarietiesNo] = React.useState(0);

    const fetchVarietyPokemon = async (e: React.MouseEvent<HTMLButtonElement>) => {
        
        e.preventDefault();
    
        if (confirmSound.paused) {
        confirmSound.play();
        } else {
        confirmSound.pause();
        confirmSound.currentTime = 0;
        confirmSound.play();
        }
        setLoading(true);

        const controller = new AbortController();
        const signal = controller.signal;
    
        if (displayNo === 0 && isVarietiesPokemon.length !== 0) {
        try {
            const nextVarietyNo = varietiesNo === totalNoOfVarieties ? 0 : varietiesNo;
            const nextVariety = isVarietiesPokemon[nextVarietyNo].toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextVariety}`, { signal });
            const data = await response.json();
            setPokemonData({
            sprites: data.sprites
            });
            setIsShinyVisible(false);
            setVarietiesNo(nextVarietyNo + 1);
        } catch (err) {
            console.log('Error fetching Pokemon: ', err);              
            setPokemonData({
            sprites: {
                front_default: '',
                front_female: '',
                front_shiny: '',
                versions: {
                'generation-i': {
                    'red-blue': {
                    front_transparent: '',
                    front_gray: '',
                    },
                    yellow: {
                    front_transparent: '',
                    front_gray: '',
                    },
                },
                'generation-ii': {
                    crystal: {
                    front_transparent: '',
                    front_shiny_transparent: '',
                    },
                    gold: {
                    front_transparent: '',
                    front_shiny: '',
                    },
                    silver: {
                    front_transparent: '',
                    front_shiny: '',
                    },
                },
                'generation-iii': {
                    emerald: {
                    front_default: '',
                    },
                    'firered-leafgreen': {
                    front_default: '',
                    front_shiny: '',
                    },
                    'ruby-sapphire': {
                    front_default: '',
                    front_shiny: '',
                    },
                },
                'generation-iv': {
                    'diamond-pearl': {
                    front_default: '',
                    front_shiny: '',
                    },
                    'heartgold-soulsilver': {
                    front_default: '',
                    front_shiny: '',
                    },
                    platinum: {
                    front_default: '',
                    front_shiny: '',
                    },
                },
                'generation-v': {
                    'black-white': {
                    front_default: '',
                    front_shiny: '',
                    animated: {
                        front_default: '',
                        front_shiny: '',
                    },
                    },
                },
                'generation-vi': {
                    'omegaruby-alphasapphire': {
                    front_default: '',
                    front_shiny: '',
                    },
                    'x-y': {
                    front_default: '',
                    front_shiny: '',
                    },
                },
                'generation-vii': {
                    icons: {
                    front_default: '',
                    },
                },
                },
            },
            });
            setIsShinyVisible(false);
        } finally {
            setLoading(false);
        }
        } else {
        setLoading(false);
        }

        return () => {
        controller.abort();
        };
    };
    
    const [countVarietyNamesNo, setCountVarietyNamesNo] = React.useState(0);

    React.useEffect (() => {
        const countVarietyNamesNofunc = () => {
        if (varietiesNo === totalNoOfVarieties) {
            setCountVarietyNamesNo(0)
        } if (varietiesNo < totalNoOfVarieties) {
            setCountVarietyNamesNo(varietiesNo);
        } else {
            return null;
        }
        }
        countVarietyNamesNofunc();
    }, [varietiesNo, totalNoOfVarieties] )

    return {
        searchTermJP,countVarietyNamesNo, fetchVarietyPokemon, goDownButton, goUpButton,
        varietiesPokemonNames, goLeftButton, goRightButton, handleSearch, handleSubmit,
        loading, pokemonData, displayNo, isVarietiesPokemon, searchTermNo, isShinyVisible

    }
};

export default useSharedPokemonData;
