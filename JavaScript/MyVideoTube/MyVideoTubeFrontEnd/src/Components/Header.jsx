
import React from 'react'

const Header = React.memo(() => {
    return(
        <header>
            <h1>
                DogTube
            </h1>
        </header>
    )
});
Header.displayName = 'Header';

export default Header;
