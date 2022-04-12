import Nav from "./Nav";
import DiscussionContainer from "./DiscussionContainer";
import { useGetCurrentSongQuery, useUpdateCurrentIterationCompleteVotesMutation, useCompleteCurrentSongMutation } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
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
            <hr />
            {isLoading 
                ? 
                    <CircularProgress color="secondary"/>
                :
            !data.iterations.length 
                ?
                <h1>No current song</h1>
                :
                    <>
                        <button onClick={() => voteHandler()}>Vote complete</button>
                        <span>{data.currentIteration.completeVotes}</span>
                        <h3>{data.currentIteration.bpm}</h3>
                        {renderStems()}
                        <hr />
                        <DiscussionContainer songId={data._id} comments={data.currentIteration.comments}/>
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