// HowTo.tsx

import * as React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HowTo: React.FC = () => {

    return (
        <main>
            <Header />

            <div className='container'>
                <img src='/pokeballCenter-cutout.png' alt='pokeballCenterImage'
                 className='pokeballCenter'></img>
                <div className='selectArea'>
                    <div className='HowToWrapper'>
                        <h2>使い方</h2>
                            <p>
                            1.表示させたいポケモンの数をドロップダウンリストから選んでください。
                            (1匹から18匹まで追加できます)
                            </p>
                            <p>
                            今回は&quot;3&quot;を例に説明していきます。
                            </p>
                            <img src='/howToImages/howTo1.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            2.ポケモンの数を選んだら、選んだポケモンの数だけボックスが現れます。
                            それぞれのボックスのドロップダウンリストから
                            表示させたいポケモンを選んでください。
                            </p>
                            <img src='/howToImages/howTo2.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            選んだポケモンに、色違いバージョンがある場合は、ボックスに色違い切り替えボタンが現れます。
                            このボタンで色違いポケモンを選ぶこともできます。
                            </p>
                            <img src='/howToImages/howTo3.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            ポケモン画像の周りのフレームの色も変更することが可能です。
                            変更する場合は、ボックスの中の&quot;色を選ぶ&quot;を押して、好きな色に変更できます。
                            </p>
                            <img src='/howToImages/howTo4.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            選んだポケモン画像のすべてのフレームの色を統一したい場合は、
                            &quot;色を統一する&quot;で好きな色でフレームの色を統一できます。
                            </p>
                            <img src='/howToImages/howTo5.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            3.追加したい言葉がある場合も変更することが可能です。
                            （デフォルトでは、私のお気に入りポケモンになっています。）
                            表示されている言葉の色の変更は、”色を選ぶ”から変更可能です。
                            </p>
                            <img src='/howToImages/howTo6.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            4.出来上がった画像は、一番下の&quot;画像を保存&quot;ボタンを押すと保存できます。
                            </p>
                            <img src='/howToImages/howTo7.png' alt='howToImages' className='howToImages'></img>

                            <p>
                            5.出来上がった画像の例
                            </p>
                            <img src='/howToImages/howTo8.png' alt='howToImages' className='howToImages'></img>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
};

export default HowTo;