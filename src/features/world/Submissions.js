import Nav from "./Nav";
import { useGetCurrentSongQuery } from "../../app/services/worlds";
import useGetCurrentIteration from "../../hooks/useGetCurrentIteration";
import { useParams } from "react-router-dom";

function Submissions() {

    const { data, isLoading } = useGetCurrentSongQuery()
    let { id } = useParams()

    const iteration = useGetCurrentIteration(id)



    console.log("HOOK", iteration)
    return (
        <div>
            <Nav />
            <div>
                <h4>Artist Name</h4>
                <p>Master</p>
                <p>Description</p>
            </div>
            <div>
                Vote
            </div>
        </div>
    );
}

export default Submissions;