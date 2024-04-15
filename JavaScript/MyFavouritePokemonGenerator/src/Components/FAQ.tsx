// FAQ.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC<{
}> = React.memo(() => 
{
    return (
        <div className='FAQWrapper'>
            <h2>よくあるご質問 (FAQ)</h2>

            <div className='FAQs'>
                <h3>このサイトは何をするサイトですか？</h3>
                <div>
                    このサイトでは、自分の好きなポケモンの画像を簡単に作成することができるサイトです。
                </div>
                <div>
                    作成した画像はX(Twitter)などのSNSで、自己紹介画像として使うこともできます。
                </div>
            </div>

            <div className='FAQs'>
                <h3>どのように使えばいいですか？</h3>
                <div>
                    追加したいポケモンの数を選んで、その次に追加したいポケモンをリストから選びます。
                </div>
                <div>
                    追加したい言葉やフレーズを選ぶこともできます。
                </div>
                <div>
                    最後に”画像を保存”を押せば、画像をお使いのデバイスに保存できます。
                </div>
                <div>
                    さらに詳しい使い方については、<Link to='/howto'>&quot;使い方&quot;</Link>をご確認ください。
                </div>
            </div>
            
            <div className='FAQs'>
                <h3>画像のダウンロードにどのくらい時間がかかりますか？</h3>
                <div>
                    画像のダウンロード時間は、お使いのWifi速度によって変わります。
                    しかし、このサイトはSPAというタイプのサイトで、画像の読み込み速度やダウンロード速度は
                    他のサイトよりも比較的に速いです。
                    
                </div>
            </div>

            <div className='FAQs'>
                <h3>作成できる画像の制限はありますか？</h3>
                <div>
                    いいえ。画像はいつでもお好きなだけ作成可能です。
                </div>
            </div>
            
            <div className='FAQs'>
                <h3>Any other questions, please contact us from 
                <Link to='/contact'> Here</Link>.</h3>
            </div>
        </div>
    )
});

export default FAQ;