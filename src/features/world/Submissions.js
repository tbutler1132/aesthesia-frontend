import Nav from "./Nav";
import { useGetCurrentSongQuery, useUpdateSubmissionMutation } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"

function Submissions() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)
    const [voteOnSubmission, /**result**/] = useUpdateSubmissionMutation()

    const voteHandler = (id, currentVotes) => {
        let votes = currentVotes + 1
        voteOnSubmission({id, votes: {votes}})
    }

    const renderSubmissions = () => {
        return data.currentIteration.submissions.map(submission => 
            <div style={{border: "solid"}} key={submission._id}>
                <button onClick={() => voteHandler(submission._id, submission.votes)}>Vote</button>
                <p>Votes: {submission.votes}</p>
                <p>{submission.bpm} Bpm</p>
            </div>    
        )
    }


    if(isLoading) return <CircularProgress />
    return (
        <div>
            <Nav />
            {renderSubmissions()} 
        </div>
    );
}

export default Submissions;