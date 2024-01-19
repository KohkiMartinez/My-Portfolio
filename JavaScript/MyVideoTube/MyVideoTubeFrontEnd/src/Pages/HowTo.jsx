import * as React from 'react';
import Data from '../JsonFiles/howToData.json';

import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Images from '../Components/Images';
import Footer from '../Components/Footer';

const HowTo = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const dummyData = Data

            setData(dummyData);
        };
        
        fetchData();
    }, []);

    return (
        <main>
            <Header />
            <Navbar />
                {data.length > 0 && <Images data={data} />}
            <Footer />
        </main>
    )
}

export default HowTo;
