import Nav from "./Nav";
import { useGetCurrentSongQuery, useUpdateSubmissionMutation, useUpdateCurrentIterationMutation } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"

function Submissions() {

    //Redundant
    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)
   
    const renderSubmissions = () => {
        return data.currentIteration.submissions.map(submission => 
            <Submission submission={submission} songId={data._id}/>
        )
    }


    if(isLoading) return <CircularProgress />
    return (
        <div>
            <Nav />
            {!data.currentIteration.submissions.length ?
            <h1>No submissions</h1>
            :
            <>
            {renderSubmissions()} 
            </>
            }
        </div>
    );
}

function Submission({ submission, songId }){

    const [voteOnSubmission, /**result**/] = useUpdateSubmissionMutation()
    const [updateCurrentIteration, /**result**/] = useUpdateCurrentIterationMutation()

    const voteHandler = (id, currentVotes) => {
        if(currentVotes === 4){
            console.log("Hit")
            updateCurrentIteration({id: songId, iteration: submission})
        }else{
            console.log("VOTE")
            let votes = currentVotes + 1
            voteOnSubmission({id, votes: {votes}})
        }
    }

    return(
        <div style={{border: "solid"}} key={submission._id}>
            <button onClick={() => voteHandler(submission._id, submission.votes)}>Vote</button>
            <p>Votes: {submission.votes}</p>
            <p>{submission.bpm} Bpm</p>
        </div>  
    )
}

export default Submissions;