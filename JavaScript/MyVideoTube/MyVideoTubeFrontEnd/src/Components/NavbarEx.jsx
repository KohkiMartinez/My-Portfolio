import { Link } from 'react-router-dom';
import React from 'react';

const NavbarEx = React.memo(() => {
    return (
        <>
            <div className='navbarEx'>
                <div className='exVideoLinks'>
                    <Link to='/ExVideos/Sono1'>Dog&Cat</Link>
                </div>
                
                <div className='informationLinks'>
                    <Link to='/ExVideos/MyPage'>My Page</Link>
                    {/* <Link to='/ExVideos/ExHowTo'>サイトについて</Link> */}
                    <Link to='/ExVideos/TopPage'>Top Page</Link>
                </div>
            </div>
            <br/>
            <div>
                Username: ExtraVideos
                <br/>
                Password: ExtraVideos
            </div>
            <br />
        </>
    )
})
NavbarEx.displayName = 'NavbarEx';

export default NavbarEx;
