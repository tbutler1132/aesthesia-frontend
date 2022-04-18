// @ts-ignore
import CreateComment from "./CreateComment.tsx";
// import styles from './World.module.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const formatDate = (date) => {
    return new Date(date).toLocaleTimeString('en-gb')
}

function DiscussionContainer({ comments, songId }) {

    console.log(comments)


    const renderComments = () => {
        return comments.map(comment => 
            <Comment key={comment._id} comment={comment}/>
        )

    }

    return (
        <div className="discussionContainer">
            <CreateComment songId={songId}/>
            <div style={{overflow: "scroll", height: "30vh", maxHeight: "50vh"}}>
                {renderComments()}
            </div>
        </div>
    );
}

function Comment({ comment }){
    return(
        <div style={{textAlign: "left", display: "flex", alignItems: "center"}}>
            <EmojiEmotionsIcon />
            <div style={{marginLeft: "10px"}}>
                <p style={{color: "green"}}>{comment.user?.artistName} <span style={{color: "grey", fontSize: "10px"}}>{formatDate(comment.createdAt)}</span></p>
                <p>
                    {comment.content}
                </p>
            </div>
        </div>
    )
}

export default DiscussionContainer;