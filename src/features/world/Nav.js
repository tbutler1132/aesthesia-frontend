import { Link, useParams } from "react-router-dom";

function Nav() {

    let { id } = useParams()

    return (
        <nav>
            <Link to={`/worlds/${id}`}>World</Link>
            <Link to={`/worlds/${id}/song`}>Song</Link>
            <Link to={`/worlds/${id}/submissions`}>Submissions</Link>
        </nav>
    );
}

export default Nav;