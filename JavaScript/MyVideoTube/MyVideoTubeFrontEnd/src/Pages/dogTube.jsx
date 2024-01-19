import React from 'react';
import Data from '../JsonFiles/dogVideoData.json';

import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import InputWithLabel from '../Components/InputWithLabel'
import Videos2 from '../Components/Videos2';
import Buttons from '../Components/Buttons';
import Footer from '../Components/Footer';

const DogVideo = React.memo(() => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPageDogVideo');
    const [currentPage, setCurrentPage] = React.useState(
        lastVisitedPage ? parseInt(lastVisitedPage, 10) : 1
    );

    const [data, setData] = React.useState([]);

    const [urls, setUrls] = React.useState([]);

    const [filteredData, setFilteredData] = React.useState(
        localStorage.getItem('filteredDogVideoData') || ''
    );

    const [totalPages, setTotalPages] = React.useState(0);

    const [searchTerm, setSearchTerm] = React.useState(
        localStorage.getItem('searchDogVideo') || ''
    );

    React.useEffect(() => {
        localStorage.setItem('searchDogVideo', searchTerm);
    }, [searchTerm]);

    function calculateTotalPages(data) {
        return new Promise(resolve => {
            setTimeout(() => {
                const count = data.length;
                const totalPage = Math.ceil(count / 2);

                resolve(totalPage);
            }, 0);
        });
    }

    React.useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const dummyData = Data

            setData(dummyData);
        };
        
        fetchData();
    }, []);

    React.useEffect(() => {
        const itemsPerPage = 2;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const filteredUrls = data.length > 0 ? data.filter((d) =>
            d.keyWords.includes(searchTerm)) : [];
        
        setFilteredData(filteredUrls);
        localStorage.setItem('filteredDogVideoData', filteredUrls);

        const targetUrls = filteredUrls.length > 0 ? filteredUrls.slice(startIndex, endIndex) : [];

        setUrls(targetUrls);
    }, [currentPage, data, searchTerm]);

    React.useEffect(() => {
        const fetchData2 = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const dummyData2 = filteredData;
            localStorage.setItem('filteredDogVideoData', filteredData);

            const totalPage = await calculateTotalPages(dummyData2);
            setTotalPages(totalPage);
        };
        fetchData2();
    }, [filteredData]);

    React.useEffect(() => {
        localStorage.setItem('lastVisitedPageDogVideo', currentPage);
    }, [currentPage]);

    const goToNextPage = React.useCallback(() => {
        setCurrentPage(prevPage => {
            const nextPage = prevPage + 1;
            return nextPage;
        });
    }, []);

    React.useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1)
        }
    }, [currentPage, totalPages])

    const goToPreviousPage = React.useCallback(() => {
        setCurrentPage(prevPage => {
            const previousPage = prevPage - 1;
            return previousPage;
        });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        localStorage.setItem('searchDogVideo', event.target.value);
    };

    return (
        <main>

            <Header />

            <Navbar />

            <InputWithLabel
                id='search'
                label='Type number of Video(1 - 6)'
                value={searchTerm}
                onInputChange={handleSearch}
            />
            <hr />

            <Videos2
                urls={urls}
            />
            
            <Buttons 
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />

            <Footer />
        </main>
    );
});
DogVideo.displayName = 'DogVideo';

export default DogVideo;
