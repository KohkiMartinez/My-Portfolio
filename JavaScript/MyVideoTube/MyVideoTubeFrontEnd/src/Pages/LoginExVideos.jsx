import React from 'react';
import { Link } from 'react-router-dom';
import HeaderEx from '../Components/HeaderEx';
import NavbarEx from '../Components/NavbarEx';
import FooterEx from '../Components/FooterEx';

const LoginExVideos = React.memo(() => {
    const Endpoint = process.env.REACT_APP_ENDPOINT;
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${Endpoint}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            })
            const jsonResponse = await response.json();
            localStorage.setItem('token', jsonResponse.token);
            alert(jsonResponse.message);
            window.location.href = 'https://portfolio-myvideotube.pages.dev/ExVideos/MyPage';
        } catch(err) {
            // alert('ログインに失敗しました。この問題が解決しない場合は、お問い合わせからおしらせください。')
            alert('Failed to Login. Something went wrong...')
        }
    }

    return (
        <main>
            <HeaderEx />
            <Link to='/'>Go back to DogTube ↩</Link>
            <NavbarEx />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)}
                type='text' name='name' placeholder='Name or Nickname' required />
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                type='text' name='password' placeholder='Password' required />
                <button>Login</button>
            </form>
            <div>
                Or <Link to='/ExVideos/register'>Create an Account</Link> 
            </div>
            <FooterEx />
        </main>
    )
})
LoginExVideos.displayName = 'LoginExVideos';

export default LoginExVideos;
