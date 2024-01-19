import React from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const useAuth = () => {
    const [loginUserInfo, setLoginUserInfo] = React.useState('');

    const navigate = useNavigate();

    React.useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/ExVideos/register');
        }

        try {
            const decoded = jwt_decode(token);
            setLoginUserInfo(decoded);
            // console.log(decoded);
        } catch(err) {
            navigate('/ExVideos/login');
        }
    }, [navigate]);

    return loginUserInfo;
}

export default useAuth;
