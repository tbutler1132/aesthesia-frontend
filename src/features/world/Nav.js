import { Link, useParams, useLocation } from "react-router-dom";
// import styles from './World.module.css';
import CreateSubmission from "./CreateSubmission";


function Nav() {
    let { id } = useParams()
    let params = useLocation()

    return (
        <nav className="worldNav">
            <div>
                <Link style={{borderColor: params.pathname === `/worlds/${id}/world` ? "purple" : "black"}} to={`/worlds/${id}/world`}>World</Link>
                <Link style={{borderColor: params.pathname === `/worlds/${id}/currentSong` ? "purple" : "black"}} to={`/worlds/${id}/currentSong`}>Current Song</Link>
                <Link style={{borderColor: params.pathname === `/worlds/${id}/submissions` ? "purple" : "black"}} to={`/worlds/${id}/submissions`}> Current Submissions</Link>
                <Link style={{borderColor: params.pathname === `/worlds/${id}/songs` ? "purple" : "black"}} to={`/worlds/${id}/songs`}>Complete Songs</Link>
            </div>
            <div>
                <CreateSubmission />
            </div>
        </nav>
    );
}

export default Nav;