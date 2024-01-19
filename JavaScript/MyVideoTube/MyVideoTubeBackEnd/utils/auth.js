const jwt = require('jsonwebtoken');
const secret_key = 'ExVideosUser';

const auth = async(req, res, next) => {
    const token = await req.headers.authorization.split(" ")[1];

    if (!token) {
        res.status(400).json({ message: 'No Token'});
    }
    try {
        const decoded = jwt.verify(token, secret_key);
        console.log(decoded);
        req.body.name = decoded.name;
        req.body.password = decoded.password;
        return next();
    } catch(err) {
        res.status(400).json({message: 'Wrong Token. Please login again'});
    }
}

module.exports = auth;
