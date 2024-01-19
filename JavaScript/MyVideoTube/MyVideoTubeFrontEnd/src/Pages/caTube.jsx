import React from 'react';
// import Data from '../JsonFiles/sokoSakuData.json';
import Data from '../JsonFiles/catVideoData.json';

import HeaderS from '../Components/HeaderS';
import NavbarS from '../Components/NavbarS';
import InputWithLabel from '../Components/InputWithLabel'
import VideosS from '../Components/VideosS';
import Buttons from '../Components/Buttons';
import FooterS from '../Components/FooterS';

const CatVideo = React.memo(() => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPageCatVideo');
    const [currentPage, setCurrentPage] = React.useState(
        lastVisitedPage ? parseInt(lastVisitedPage, 10) : 1
    );

    const [data, setData] = React.useState([]);

    const [urls, setUrls] = React.useState([]);

    const [filteredData, setFilteredData] = React.useState(
        localStorage.getItem('filteredCatVideoData') || ''
    );

    const [totalPages, setTotalPages] = React.useState(0);

    const [searchTerm, setSearchTerm] = React.useState(
        localStorage.getItem('searchCatVideo') || ''
    );

    React.useEffect(() => {
        localStorage.setItem('searchCatVideo', searchTerm);
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
        localStorage.setItem('filteredCatVideoData', filteredUrls);

        const targetUrls = filteredUrls.length > 0 ? filteredUrls.slice(startIndex, endIndex) : [];

        setUrls(targetUrls);
    }, [currentPage, data, searchTerm]);

    React.useEffect(() => {
        const fetchData2 = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const dummyData2 = filteredData;
            localStorage.setItem('filteredCatVideoData', filteredData);

            const totalPage = await calculateTotalPages(dummyData2);
            setTotalPages(totalPage);
        };
        fetchData2();
    }, [filteredData]);

    React.useEffect(() => {
        localStorage.setItem('lastVisitedPageCatVideo', currentPage);
    }, [currentPage]);

    React.useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1)
        }
    }, [currentPage, totalPages])

    const goToNextPage = () => {
        setCurrentPage(prevPage => {
            const nextPage = prevPage + 1;
            return nextPage;
        });
    };

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => {
            const previousPage = prevPage - 1;
            return previousPage;
        });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        localStorage.setItem('searchCatVideo', event.target.value);
    };

    return (
        <main>

            <HeaderS />

            <NavbarS />

            <InputWithLabel
                id='search'
                label='Type number of Video(1 - 6)'
                value={searchTerm}
                onInputChange={handleSearch}
            />
            <hr />

            <VideosS
                urls={urls}
            />
            
            <Buttons 
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />

            <FooterS />
        </main>
    );
});
CatVideo.displayName = 'CatVideo';

export default CatVideo;
