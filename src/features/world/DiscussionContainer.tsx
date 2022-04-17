// @ts-ignore
import CreateComment from "./CreateComment.tsx";
// import styles from './World.module.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function DiscussionContainer({ comments, songId }) {


    const renderComments = () => {
        return comments.map(comment => 
            <Comment key={comment._id} comment={comment}/>
        )

    }

    return (
        <div className="discussionContainer">
            <div style={{overflow: "scroll", height: "30vh", maxHeight: "50vh"}}>
                {renderComments()}
            </div>
            <CreateComment songId={songId}/>
        </div>
    );
}

function Comment({ comment }){
    return(
        <div style={{textAlign: "left", display: "flex", alignItems: "center"}}>
            <EmojiEmotionsIcon />
            <div style={{marginLeft: "10px"}}>
                <p style={{color: "green"}}>Name <span style={{color: "grey", fontSize: "10px"}}>1:34 pm</span></p>
                <p>
                    {comment.content}
                </p>
            </div>
        </div>
    )
}

export default DiscussionContainer;