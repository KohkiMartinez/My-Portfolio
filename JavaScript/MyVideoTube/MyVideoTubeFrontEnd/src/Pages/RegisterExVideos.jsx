import React from 'react';
import { Link } from 'react-router-dom';
import HeaderEx from '../Components/HeaderEx';
import NavbarEx from '../Components/NavbarEx';
import FooterEx from '../Components/FooterEx';

const RegisterExVideos = React.memo(() => {
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
                    password: password,
                    // paymentStatus: 'no'
                })
            });
            const jsonResponse = await response.json();
            alert(jsonResponse.message); 
            window.location.href = '/ExVideos/login';
        } catch(err) {
            // alert('アカウント作成に失敗しました。この問題が続く場合は、お問い合わせでお知らせください。')
            alert('Failed to create an account. Please try again.')
        }
    }

    return (
        <main>
            <HeaderEx />
            <Link to='/'>Go back to DogTube ↩</Link>
            <NavbarEx />
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text' name='name' placeholder='Name or Nickname' required
                />
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='text' name='password' placeholder='password' required
                />
                <button>Create</button>
            </form>

            <div>
                Please screenshot or write down name and password.
            </div>
            <div>
                Or <Link to='/ExVideos/login'>Login</Link>
            </div>
            <FooterEx />
        </main>
    )
})
RegisterExVideos.displayName = 'RegisterExVideos';

export default RegisterExVideos;
