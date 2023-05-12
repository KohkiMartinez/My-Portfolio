// header
import { Link } from "react-router-dom";
import headerSVG from "../images/header.svg"

const Header = () => {
    return(
        <header>
            <div><Link to="/"><img src={headerSVG} alt="header" /></Link></div>
            <nav>
                <ul>
                    <li><Link to="/user/register">Register</Link></li>
                    <li><Link to="/user/login">Login</Link></li>
                    <li><Link to="/item/create">Create Item</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header
