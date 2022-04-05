import Nav from "./Nav";
import DiscussionContainer from "./DiscussionContainer";
import { useGetCurrentSongQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";

function CurrentSong() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)

    console.log(data)
    return (
        <div>
            <Nav />
            <hr />
            <h3>Current</h3>
            <p>Master:</p>
            <p>Stem 1:</p>
            <p>Stem 2:</p>
            <p>Stem 3:</p>
            <hr />
            <DiscussionContainer />
        </div>
    );
}

export default CurrentSong;