// Header
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/">Covid Case by Country</Link>
            <Link to="/world">World Covid Cases</Link>
        </div>
    );
};

export default Header;
