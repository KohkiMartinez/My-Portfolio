// create
import { useState } from "react";
import useAuth from "../../utils/useAuth";
import ImgInput from "../../components/imgInput";

const CreateItem = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:5000/item/create", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description
                })
            })
            const jsonData = await response.json();
            alert(jsonData.message);
        } catch(err) {
            alert("Failed to Create Data");
        }
    }

    const loginUser = useAuth();

    if(loginUser) {
        return(
            <div>
                <h1 className="page-title">Create Item</h1>
                <ImgInput setImage={setImage} />
                <form onSubmit={handleSubmit}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}
                    type="text" name="title" placeholder="Item Name" required />
                    <input value={price} onChange={(e) => setPrice(e.target.value)}
                    type="text" name="price" placeholder="price" required />
                    <input value={image} onChange={(e) => setImage(e.target.value)}
                    type="text" name="image" placeholder="image" required />
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                    type="text" name="description" rows="15" placeholder="description" required />
                    <button>Create</button>
                </form>
            </div>
        );
    };
};

export default CreateItem;
