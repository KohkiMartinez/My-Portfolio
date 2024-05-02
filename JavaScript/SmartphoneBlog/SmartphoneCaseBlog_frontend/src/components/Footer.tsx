// Footer.jsx

import React from 'react';

const Footer: React.FC = React.memo(() => {
    return (
        <footer>
            <p>@{new Date().getFullYear()} Smartphone Case Blog</p>
        </footer>
    )
})

export default Footer;
