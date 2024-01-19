
// import * as React from 'react';
import { Link } from 'react-router-dom';

// import Header from '../Components/Header';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

const TermsOfUse = () => {

    return (
        <main>
            {/* <Header />
            <Navbar /> */}
            <header>
                <div>
                    <Link to='/'>ポケボックス</Link>
                </div>
            </header>
        

            <div className='navbar'>
                {/* <div>
                    <Link to='/'>クリアパープル</Link>
                </div>
                <div>
                    <Link to='/GBC_151'>イエロー１５１</Link>
                </div> */}
                <div>
                    <Link to='/contact'>お問い合わせ</Link>
                </div>
            </div>

            <div className='container'>
                <img src='/pokeballCenter-cutout.png' className='pokeballCenter'></img>
                <div className='selectArea'>
                    <div className='termsOfUseWrapper'>
                        <h2>利用規約</h2>

                            <p>
                                
                            </p>

画像の利用について
ポケボックスにより生成された画像は商用・非商用を問わず無償でご利用いただけます。使用にあたって報告等は不要です。
ただし、本サイトで生成した画像や本サイトを利用したことによるいかなるトラブル・損害も、一切の責任を負いかねます。
画像の加工については、以下の通りとします。


非商用利用の場合
画像の二次配布・編集・加工等、全て自由です。

商用利用の場合
画像下の「X(Twitter)@maki_dev04」の文字を残していただければ、自由に編集・加工等して頂いて構いません。
二次配布を行う場合も、必ず当サイトのリンクを記載してください。
その他、不明点についてはこちら(URL)にてお問い合わせください。
                    </div>
                </div>

                <footer>
              <div>Copyright(C) PokeBox. All Rights Reserved</div>
          </footer>
            </div>
            
            {/* <Footer /> */}
        </main>
    );
};

export default TermsOfUse;