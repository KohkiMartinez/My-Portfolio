
import * as React from 'react';

import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ContactForm = () => {
    const Endpoint = process.env.REACT_APP_ENDPOINT;
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');

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
                    message: message
                })
            });
            const jsonResponse = await response.json();
            alert(jsonResponse.message);
            window.location.href = 'https://portfolio-myvideotube.pages.dev';
        } catch(err) {
            // alert('メッセージの送信に失敗しました。')
            alert('Something went wrong...')
        }
    }

    return (
        <main>
            <Header />
            <Navbar />
            <h2>Contact form</h2>
            <div>If you have any quetion, please send us.</div>
            <form onSubmit={handleSubmit} className='contactForm'>
                <input value={name} onChange={(e) => setName(e.target.value)}
                type='text' name='name' placeholder='Name' required className='contactFormName'/>
                <textarea value={message} className='contactFormMessage' onChange={(e) => setMessage(e.target.value)}
                type='text' name='message' rows='15' placeholder='Message' required />
                <button>Send</button>
            </form>
            <Footer />
        </main>
    );
};

export default ContactForm;
