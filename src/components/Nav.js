import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav-container">
            <Link to="/discover">Aesthesia</Link>
            <Link to="/worlds/new">Your World</Link>
        </div>
    );
}

export default Nav;