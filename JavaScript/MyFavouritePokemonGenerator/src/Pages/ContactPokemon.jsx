
import * as React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';



const ContactForm = () => {
    const Endpoint = process.env.REACT_APP_ENDPOINT;
    const [name, setName] = React.useState('');
    const [email1, setEmail1] = React.useState('');
    const [email2, setEmail2] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [response ,setResponse] = React.useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (email1 == email2) {
            try {
                const response = await fetch(`${Endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email1,
                        message: message
                    })
                });
                const jsonResponse = await response.json();
                setResponse(jsonResponse.message);
            } catch(err) {
                // alert('メッセージの送信に失敗しました。');
                setResponse('Something went wrong...')
            }
        } else {
            setResponse('Please check e-mail address and try again.');
        }

    }

    return (
        <main>
            <Header />

            <div className='container'>
                <img src='/pokeballCenter-cutout.png' alt='pokeballCenterImage' 
                className='pokeballCenter'></img>
                <div className='selectArea'>
                    <div className='contactFormWrapper'>
                        <h2>Contact Form</h2>
                        <div>※If you need a response from us, please fill your email address in the box,
                            if not, then you can send your message without email address.
                        </div>
                        
                        <hr></hr>
                        <form onSubmit={handleSubmit} className='contactForm'>
                            <div>*Name: </div>
                            <input value={name} onChange={(e) => setName(e.target.value)}
                            type='text' name='name' placeholder='Name' required className='contactFormName'/>
                            
                            <div>E-mail Address: </div>
                            <input value={email1} onChange={(e) => setEmail1(e.target.value)}
                            type='text' name='email' placeholder='E-mail Address' className='contactFormEmail'/>
                            <div>E-mail Address(checking): </div>
                            <input value={email2} onChange={(e) => setEmail2(e.target.value)}
                            type='text' name='email' placeholder='E-mail Address' className='contactFormEmail'/>
                            
                            <div>*Message: </div>
                            <textarea value={message} className='contactFormMessage' onChange={(e) => setMessage(e.target.value)}
                            type='text' name='message' rows='15' placeholder='Message' required />

                            <div className='sendButtonContainer'>
                                <button className='sendButton'>Send</button>
                            </div>
                        </form>
                        {response ? (
                            <div className='responseContainer'>
                                <div className='response'>
                                    {response}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
};

export default ContactForm;
