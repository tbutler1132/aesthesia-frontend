import { dataTable } from "html-to-text/lib/formatter";
import CreateComment from "./CreateComment";

function DiscussionContainer({ comments, songId }) {


    const renderComments = () => {
        return comments.map(comment => 
            <Comment key={comment._id} comment={comment}/>
        )

    }

    return (
        <div>
            {renderComments()}
            <CreateComment songId={songId}/>
        </div>
    );
}

function Comment({ comment }){
    return(
        <p>
            {comment.content}
        </p>
    )
}

export default DiscussionContainer;