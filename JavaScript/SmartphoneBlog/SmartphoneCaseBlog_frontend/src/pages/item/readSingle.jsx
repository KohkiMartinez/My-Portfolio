// readSingle.jsx
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ReadSingleItem = () => {
    const Endpoint = process.env.REACT_APP_ENDPOINT;
    const params = useParams()
    const parts = params.id.split('&');
    const blogId = parts[0];
    const blogImageId = parts[1];
    const [modifiedHtmlData, setModifiedHtmlData] = React.useState('');
    const [imageUrls, setImageUrls] = React.useState([]);
    const [CCImageSrc, setCCImageSec] = React.useState([]);
    const [htmldata, setHtmldata] = React.useState('');
    const [amazonItemLink, setAmazonItemLink] = React.useState('');

    React.useEffect(() => {
        const getSingleItem = async() => {
            // Get Item Data
            const response = await fetch(`${Endpoint}item/${blogId}`);
            const jsonResponse = await response.json();
            const blogDataHtml = jsonResponse.singleItem.description
            setHtmldata(blogDataHtml);
            // Get Image Urls and Item link 
            const imageResponse = await fetch(`${Endpoint}image/${blogImageId}`);
            const imageJsonResponse = await imageResponse.json();
            const imagesArray = await imageJsonResponse.singleItem.amazonImageUrls.split(",");
            const commentImageArray = await imageJsonResponse.singleItem.commentCharacterImageSrc.split(",");
            setImageUrls(imagesArray);
            setAmazonItemLink(imageJsonResponse.singleItem.amazonItemLink);
            setCCImageSec(commentImageArray);
        }
        getSingleItem();
    }, [blogId, blogImageId]);

    React.useEffect(() => {
        const modifiedData = async() => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmldata, 'text/html');

            const imgElements = doc.querySelectorAll('.smartphoneImage');

            const amazonLinkElements = doc.querySelectorAll('.amazonItemLink');

            const commentCharacterElements = doc.querySelectorAll('.commentCharacterImage');

            imgElements.forEach((imgElement, index) => {
                imgElement.src = imageUrls[index];
            });

            amazonLinkElements.forEach(amazonLinkElement => {
                amazonLinkElement.href = amazonItemLink
            });

            commentCharacterElements.forEach((commentCharacterElement, index) => {
                commentCharacterElement.src = CCImageSrc[index];
            });

            const modifiedHtml = doc.documentElement.outerHTML;

            setModifiedHtmlData(modifiedHtml);
        }
        modifiedData();
    }, [htmldata, imageUrls, amazonItemLink, CCImageSrc]);

    return (
        <main>
            <Header />
            
            <div className='wrapper'>
                <a href='/' className='goBack'>↩Back to Main</a>

                <div dangerouslySetInnerHTML={{ __html: modifiedHtmlData}}></div>
                
                <a href='/' className='goBack'>↩Back to Main</a>
                
            </div>
            <Footer />
        </main>
    )
}

export default ReadSingleItem
