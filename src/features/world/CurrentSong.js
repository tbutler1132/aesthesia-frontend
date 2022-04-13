import Nav from "./Nav";
import DiscussionContainer from "./DiscussionContainer";
import { useGetCurrentSongQuery, useUpdateCurrentIterationCompleteVotesMutation, useCompleteCurrentSongMutation } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button"
import styles from './World.module.css';
import CircularProgress from "@mui/material/CircularProgress"

function CurrentSong() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)
    const [incrementVote] = useUpdateCurrentIterationCompleteVotesMutation()
    const [completeSong] = useCompleteCurrentSongMutation()

    const renderStems = () => {
        return data.currentIteration.stems.map(stem => 
            <Stem key={stem._id} stem={stem}/>
        )
    }

    const voteHandler = () => {
        if(data.currentIteration.completeVotes >= 4){
            completeSong({id})
        }else{
            incrementVote({id: data._id})
        }
    }

    return (
        <div>
            <Nav />
            {isLoading 
                ? 
                    <CircularProgress color="secondary"/>
                :
            !data.iterations.length 
                ?
                    <h1>No current song</h1>
                :
                <>
                    <div className={styles.iterationContainer}>
                        <h2>Version: {data.currentIteration.version}</h2>
                        {renderStems()}
                        <hr/>
                        <div style={{width: "500px"}}>
                            <p>{data.currentIteration.description}</p>
                        </div>
                        <Button variant="outlined" color={data.currentIteration.completeVotes === 4 ? "success" : "secondary"} onClick={() => voteHandler()}>Vote complete</Button>
                    </div>
     
                    <DiscussionContainer songId={data._id} comments={[...data.currentIteration.comments].reverse()}/>
                </>
            }
        </div>
    );
}

function Stem({ stem }){
    return(
        <p>
            {stem.track}: {stem.file}
        </p>
    )
}

export default CurrentSong;