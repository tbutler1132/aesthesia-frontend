import { Link, useParams } from "react-router-dom";

function Nav() {

    let { id } = useParams()

    return (
        <nav>
            <Link to={`/worlds/${id}`}>World</Link>
            <Link to={`/worlds/${id}/songs`}>Songs</Link>
            <Link to={`/worlds/${id}/currentSong`}>Current Song</Link>
            <Link to={`/worlds/${id}/submissions`}>Submissions</Link>
        </nav>
    );
}

export default Nav;