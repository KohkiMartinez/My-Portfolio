// Header.jsx

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1>Pokemon Search</h1>

        <div className='navbar'>
            <div>
                <Link to='/'>
                    <img src='/images/ConsoleIcons/GBC_Icon.png' className='ConsoleIcons'></img>
                    GBC
                </Link>
            </div>
            <div>
                <Link to='/GBA'>
                    <img src='/images/ConsoleIcons/GBA_Icon.png' className='ConsoleIcons'></img>
                    GBA
                </Link>
            </div>
            <div>
                <Link to='/shodaiPokedex'>
                    <img src='/images/ConsoleIcons/pokedex.png' className='ConsoleIcons'></img>
                    Pokedex
                </Link>
            </div>
            <div>
                <Link to='https://portfolio-myfavourite-pokemongenerator.pages.dev/'>
                    <img src='/images/PokemonIcons/(25).png' className='ConsoleIcons'></img>
                    Generator
                </Link>
            </div>
        </div>
    </>
    )
}

export default Header;
