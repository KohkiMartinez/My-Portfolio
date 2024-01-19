import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth';
import HeaderEx from '../Components/HeaderEx';
import NavbarEx from '../Components/NavbarEx';
import FooterEx from '../Components/FooterEx';

const ExVideosMyPage = React.memo(() => {
    const Endpoint = process.env.REACT_APP_ENDPOINT;
    const loginUserPassword = useAuth();      

    const [userName, setUserName] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    React.useEffect(() => {
        const checkToken = async() => {
            try {
                
                const response = await fetch(`${Endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                const jsonData = await response.json();
                setUserName(jsonData.userData.name);
                setUserPassword(jsonData.userData.password);
            } catch(err) {
                console.log(err);
                return
            }
        }
        checkToken();
        
    }, [loginUserPassword, userName, userPassword]);

    if (loginUserPassword.password === userPassword ) {

        // const vipCreatedAtUTC = new Date(vipUserCreatedAt);
        // const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
        
        
        // const vipExpiresAt = new Date(vipCreatedAtUTC.getTime() + thirtyDaysInMilliseconds);
        // console.log(vipExpiresAt);

        // const now = new Date();

        // const timeDifferenceInMilliseconds = vipExpiresAt - now;
        // const timeDifferenceInDays = Math.round((timeDifferenceInMilliseconds / (24 * 60 * 60 * 1000)) * 10) / 10;
        // console.log(timeDifferenceInDays)


        
        return (
            <main>
                <HeaderEx />
                <Link to='/'>Go back to DogTube ↩</Link>
                
                <NavbarEx />
                <h3>Welcome back {userName}!!</h3>
                <div>Enjoy Dog and Cat Videos!!</div>


                {/* {vipUserName ? (
                    <>
                        <h4>あなたはVIPユーザー様です。</h4>
                        <div>{timeDifferenceInDays}日です。</div>
                    </>
                ) : (
                    <>
                        <a onClick={handleClick}>サイトの全機能解放について👈</a>
                            {isElementVisible &&
                            <div>
                                <div>今現在 {userName} 様は、サイトの全機能を解放しておられません。</div>
                                <div>サイトの全機能解放には、お支払いが必要になります。</div>
                                <div>詳しくは、<Link to='/ExVideos/aboutPayment'> お支払いについて </Link>
                                をお読みください。</div>
                            </div>
                            }
                    </>
                )} */}

                <FooterEx />
            </main>
        )
    } else {
        return (
            <main>
                <HeaderEx />
                <Link to='/'>Go back to DogTube↩</Link>
                <NavbarEx />
                <Link to='/Exvideos/login'>Login</Link> or <Link to='/Exvideos/register'>create an account</Link>
                <FooterEx />
                
            </main>
        )
    }

});
ExVideosMyPage.displayName = 'ExVideos';

export default ExVideosMyPage;