// readSingle
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ReadSingleItem = () => {
    const params = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const getSingleItem = async() => {
            const response = await fetch(`http://localhost:5000/item/${params.id}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            setTitle(jsonResponse.singleItem.title);
            setPrice(jsonResponse.singleItem.price);
            setImage(jsonResponse.singleItem.image);
            setDescription(jsonResponse.singleItem.description);
        }
        getSingleItem();
    }, [params.id])


    return(
        <div className="grid-container-si">
            <div>
                {image && <img src={require(`../../images${image}`)} alt="item" />}
            </div>        
            <div>
                <h1>{title}</h1>
                <h2>{price}</h2>
                <hr />
                <p>{description}</p>
            <Link to={`/item/update/${params.id}`}>Edit Item</Link>
            <Link to={`/item/delete/${params.id}`}>Delete Item</Link>
            </div>
        </div>
    );
};

export default ReadSingleItem;
