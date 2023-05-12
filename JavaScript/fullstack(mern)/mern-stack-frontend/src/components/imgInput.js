// imgInput
import { useState } from "react";

const ImgInput = (props) => {
    const [imageFile, setImageFile] = useState("");

    const handleClick = async() => {
        try{
            const data = new FormData()
            data.append("file", imageFile)
            data.append("upload_preset", "kfywtnjn")
            data.append("cloud_name", "dpn05wkib")
            const response = await fetch("https://api.cloudinary.com/v1_1/dpn05wkib/image/upload",{
                method: "POST",
                body: data
            })
            const jsonData = await response.json();
            await props.setImage(jsonData.url)
            alert("Uploaded Your Images Successfully")
        } catch(err) {
            alert("Failed to Upload Your Images")
        }
    }
    return (
        <div className="img-input">
            <input type="file" onChange={(e) => 
            setImageFile(e.target.files[0])} accept="image/png, image/jpg" />
            <button onClick={handleClick} disabled={!imageFile}>Upload Image</button>
        </div>
    )
}

export default ImgInput;
