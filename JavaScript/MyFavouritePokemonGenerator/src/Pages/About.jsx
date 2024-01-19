// About.jsx

import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const About = () => {

    return (
        <main>
            <Header />

            <div className='container'>
                <img src='/pokeballCenter-cutout.png' alt='pokeballCenterImage'
                 className='pokeballCenter'></img>
                <div className='selectArea'>
                    <div className='termsOfUseWrapper'>
                        <h2>サイトについて</h2>

                        <p>
                        ポケナビでは、自分の好きなポケモンの画像を簡単に作成できます。
                        </p>

                        <p>
                        使い方は簡単です。
                        <div>
                            追加したいポケモンの数を選んで、その次に追加したいポケモンをリストから選びます。
                        </div>
                        <div>
                            追加したい言葉やフレーズを選ぶこともできます。
                        </div>
                        <div>
                            最後に&quot;画像を保存&quot;を押せば、画像をお使いのデバイスに保存できます。
                        </div>
                        </p>

                        <p>
                        For more information about this site, please go to<Link to='/howto'>&quot;How to Use&quot;</Link>.
                        </p>

                        <p>
                        作成した画像はSNSでポケモン履歴書などと一緒に、ポケモン自己紹介画像としてお使いください。
                        </p>

                        <p>
                        If you have any other questions, please contact us from <Link to='/contact'>Here</Link>.
                        </p>

                        <p>
                        Thanks for using PokeNavi!
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
};

export default About;