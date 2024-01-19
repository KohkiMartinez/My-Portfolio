import React from 'react';
import { Link } from 'react-router-dom';
import HeaderEx from '../Components/HeaderEx';
import NavbarEx from '../Components/NavbarEx';
import FooterEx from '../Components/FooterEx';

const ExVideos = React.memo(() => {
    return (
        <main>
            <HeaderEx />
            <Link to='/'>Back to DogTube ↩</Link>
            
            <NavbarEx />
            <h3>There are more dog and cat videos!!</h3>
            <div className='ExVideosSono1TopPageContainer'>

                <div className='sono1ImageContainer'>
                   
                    <a href='/ExVideos/Sono1'>
                        <img src='https://pub-b0da04b3a26d4c8c8a06bbe7515ddbc3.r2.dev/dogCatMain.gif'
                        width={400} height={230}></img>
                    </a>
                   

                </div><br />
                <div>
                Please Enjoy your time★
                </div><br/>
                <Link to='/ExVideos/Sono1' className='link'>Watch more dog and cat videos</Link>
            </div>

            <FooterEx />
        </main>
    )
});
ExVideos.displayName = 'ExVideos';

export default ExVideos;
