import React from 'react';
import { Link } from 'react-router-dom';
import HeaderEx from '../Components/HeaderEx';
import NavbarEx from '../Components/NavbarEx';
import VideosEx from '../Components/VideosEx';
import Buttons from '../Components/Buttons';
import FooterEx from '../Components/FooterEx';
import ExVideosSono1Data from '../JsonFiles/ExVideosSono1.json';

const ExVideosMyPage = React.memo(() => {
    const Endpoint = process.env.REACT_APP_ENDPOINT;
    const lastVisitedPage = localStorage.getItem('lastVisitedPageSono1');
    const [currentPage, setCurrentPage] = React.useState(
        lastVisitedPage ? parseInt(lastVisitedPage, 10) : 1
    );

    const [data, setData] = React.useState([]);

    const [urls, seturls] = React.useState([]);

    const [totalPages, setTotalPages] = React.useState(0);

    function calculateTotalPages(data) {
        return new Promise(resolve => {
            setTimeout(() => {
                const count = data.length;
                const totalPage = Math.ceil(count / 1);
                
                resolve(totalPage);
            }, 0);
        });
    }

    React.useEffect(() => {
        const fetchData = async() => {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const dummyData = ExVideosSono1Data
            
            setData(dummyData);

            const totalPage = await calculateTotalPages(dummyData);
            setTotalPages(totalPage);
            
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        localStorage.setItem('lastVisitedPageSono1', currentPage);
    }, [currentPage]);

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

    React.useEffect(() => {
        const itemsPerPage = 1;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        const targetUrls = data.length > 0 ? data.slice(startIndex, endIndex) : [];

        seturls(targetUrls);
    }, [currentPage, data]);


    const [userName, setUserName] = React.useState('');
    const [paymentStatus, setPaymentStatus] = React.useState('');


    React.useEffect(() => {
        const checkToken = async() => {
            try {
                const response = await fetch(`${Endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                const jsonData = await response.json();
                if (response.ok) {
                    setUserName(jsonData.userData.name);
                    if (jsonData.vipUserData && jsonData.vipUserData.paymentStatus) {
                        setPaymentStatus(jsonData.vipUserData.paymentStatus);
                    } else {
                        setPaymentStatus('');
                    }

                } else {
                    setUserName('');
                    setPaymentStatus('');
                }

            } catch(err) {
                console.error(err);
                setUserName('');
                setPaymentStatus('');
            } 
        }
        checkToken();
        
    }, [currentPage]);

    return (
        <main>
            <HeaderEx />
            <Link to='/'>Back to DogTube ↩</Link>
            <NavbarEx />

            <VideosEx 
                urls={urls}
                userName={userName}
                paymentStatus={paymentStatus}
            />
            <Buttons
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
            <FooterEx />
        </main>
    )

});
ExVideosMyPage.displayName = 'ExVideos';

export default ExVideosMyPage;