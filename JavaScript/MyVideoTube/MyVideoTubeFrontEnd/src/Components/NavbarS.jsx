import { Link } from 'react-router-dom';
import React from 'react';

const NavbarS = React.memo(() => {
    return(
        <>
            <div className='navbarS'>
                <div className='navbarVideos'>
                    <div>
                        <Link to='/'>🐶DogTube</Link>
                    </div>
                    <div>
                        <Link to='/caTube'>🐱CaTube</Link>
                    </div>
                </div>

                <div className='navbarHowTo'>
                    <div>
                        <Link to='/HowTo'>How to</Link>
                    </div>
                    <div>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>

            <div className='navbarToEx'>
                <div>
                    <Link to='/ExVideos/TopPage'>🐶Extra🐱</Link>
                </div>
            </div>
        </>

    )
});
NavbarS.displayName = 'Navbar';

export default NavbarS;