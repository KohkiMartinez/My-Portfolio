// register
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/user/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });
            const jsonResponse = await response.json();
            alert(jsonResponse.message);
        } catch(err) {
            alert("Failed to Register");
        }
    }
    return(
        <div>
            <h1 className="page-title">Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input value={newUser.name} onChange={handleChange}
                type="text" name="name" placeholder="name" required />
                <input value={newUser.email} onChange={handleChange}
                type="text" name="email" placeholder="email-address" required />
                <input value={newUser.password} onChange={handleChange}
                type="text" name="password" placeholder="password" required />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;
