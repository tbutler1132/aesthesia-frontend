// @ts-ignore
import Nav from "./Nav.tsx";
import { useGetCurrentSongQuery, useUpdateSubmissionMutation, useUpdateCurrentIterationMutation } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"

import Button from "@mui/material/Button";


const findStem = (stems: any[], type: string) => {
    return stems.find(stem => stem.track === type)
}

function Submissions() {

    //Redundant
    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)
   
    const renderSubmissions = () => {
        return data.currentIteration.submissions.map(submission => 
            <Submission key={data._id} submission={submission} songId={data._id}/>
        )
    }


    if(isLoading) return <CircularProgress />
    return (
        <div>
            <Nav />
            {!data.currentIteration.submissions.length 
                ?
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

    const [voteOnSubmission] = useUpdateSubmissionMutation()
    const [updateCurrentIteration] = useUpdateCurrentIterationMutation()

    const voteHandler = (id, currentVotes) => {
        if(currentVotes === 4){
            updateCurrentIteration({id: songId, iteration: submission})
        }else{
            let votes = currentVotes + 1
            voteOnSubmission({id, votes: {votes}})
        }
    }

    return(
        <div className="submissionContainer" key={submission._id}>
            <audio src={findStem(submission.stems, "master").file} controls/>
            <p>{submission.description}</p>
            <Button color={submission.votes === 4 ? "success" : "primary"} variant="outlined" onClick={() => voteHandler(submission._id, submission.votes)}>Vote</Button>
        </div>  
    )
}

export default Submissions;