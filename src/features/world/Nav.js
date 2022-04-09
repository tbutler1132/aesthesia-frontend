import { Link, useParams } from "react-router-dom";
import styles from './World.module.css';


function Nav() {
    let { id } = useParams()

    return (
        <nav className={styles.worldNav}>
            <Link to={`/worlds/${id}`}>World</Link>
            <Link to={`/worlds/${id}/currentSong`}>Current Song</Link>
            <Link to={`/worlds/${id}/submissions`}> Current Submissions</Link>
            <Link to={`/worlds/${id}/songs`}>Complete Songs</Link>
            <button>Submit an iteration!</button>
        </nav>
    );
}

export default Nav;