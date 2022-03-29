import Nav from "./Nav";
import DiscussionContainer from "./DiscussionContainer";

function Song() {
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

export default Song;