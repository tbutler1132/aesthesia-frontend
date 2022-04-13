import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Nav() {
    return (
        <div className="nav-container">
            <div className="left">
                <Link style={{fontSize: "36px"}} to="/discover">Aesthesia</Link>
            </div>
            <div className="right">
                <Link style={{marginRight: "15px"}} to="/worlds/new">Your World</Link>
                <AccountCircleIcon />
            </div>
        </div>
    );
}

export default Nav;