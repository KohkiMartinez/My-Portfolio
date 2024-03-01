// app/components/imgInput.js

import { useState } from "react";

const ImgInput = (props) => {
    const [imageFile, setImageFile] = useState("")

    const handleClick = async() => {
        try {
            const data = new FormData()
            data.append("file", imageFile)
            data.append("upload_preset", "knmmlo2s")
            data.append("cloud_name", "duicwinki")
            const response = await fetch("https://api.cloudinary.com/v1_1/duicwinki/image/upload", {method: "POST", body: data})
            const jsonData = await response.json()
            await props.setImage(jsonData.url)
            alert("Sccessfully Upload Image")
        } catch (err) {
            alert("Failed. Something went wrong...")
        }
    }
    return (
        <div className="img-input">
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])}
            accept="image/png, image/jpg"/>
            <button onClick={handleClick} desabled={!imageFile}>Upload Image</button>
        </div>
    )
}

export default ImgInput