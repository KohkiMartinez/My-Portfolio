// auth.js
const jwt = require("jsonwebtoken");
const secret_key = "mern-market";

const auth = async(req, res, next) => {
    
    if(req.method === "GET") {
        return next();
    }
    const token = await req.headers.authorization.split(" ")[1];
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjgxOTY3NTU4LCJleHAiOjE2ODIwNTAzNTh9.gPKUK9D7B0MqYXuFyoe4abzNH7DcwAn4Md3sFgaK5uc"
                
    if(!token) {
        res.status(400).json({message: "No Token"})
    }
    try {
        const decoded = jwt.verify(token, secret_key);
        req.body.email = decoded.email;
        return next();
    } catch(err) {
        res.status(400).json({message: "Wrong Token. Please Login Again"});
    }
}

module.exports = auth