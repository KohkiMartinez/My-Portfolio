// Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className='important'>
        <div>
            <Link to='/contact'>Contact</Link>
        </div>
        <div>
            <Link to='/privacypolicy'>Privacy Policy</Link>
        </div>
        <div>
            <Link to='/about'>About</Link>
        </div>
        </div>
        <footer>
            <div>Copyright(C) {new Date().getFullYear()} PokeNavi. All Rights Reserved</div>
        </footer>
    </>
    )
}

export default Footer;
