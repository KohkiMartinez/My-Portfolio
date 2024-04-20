// PokemonData.tsx

export type PokemonData = {
    sprites: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        versions: {
            'generation-i': {
                ['red-blue']: {
                    front_transparent: string;
                    front_gray: string;
                },
                yellow: {
                    front_transparent: string;
                    front_gray: string;
                }
            },
            'generation-ii': {
                crystal: {
                    front_transparent: string,
                    front_shiny_transparent: string,
                },
                gold: {
                    front_transparent: string,
                    front_shiny: string,
                },
                silver: {
                    front_transparent: string,
                    front_shiny: string,
                }
            },
            'generation-iii': {
                emerald: {
                front_default: string,
                },
                ['firered-leafgreen']: {
                front_default: string,
                front_shiny: string,
                },
                ['ruby-sapphire']: {
                front_default: string,
                front_shiny: string,
                }
            },
            'generation-iv': {
                ['diamond-pearl']: {
                    front_default: string,
                    front_shiny: string,
                },
                ['heartgold-soulsilver']: {
                    front_default: string,
                    front_shiny: string,
                },
                platinum: {
                    front_default: string,
                    front_shiny: string,
                }
            },
            'generation-v': {
                ['black-white']: {
                    front_default: string,
                    front_shiny: string,
                    animated: {
                    front_default: string,
                    front_shiny: string,
                    },
                },
            },
            'generation-vi': {
                ['omegaruby-alphasapphire']: {
                    front_default: string,
                    front_shiny: string,
                },
                ['x-y']: {
                    front_default: string,
                    front_shiny: string,
                }
            },
            'generation-vii': {
                icons: {
                    front_default: string,
                }
            }
        };
    };
};