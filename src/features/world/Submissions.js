import Nav from "./Nav";
import { useGetWorldQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";

function Submissions(props) {
    let { id } = useParams()
    const { data } = useGetWorldQuery(id)

    console.log(data)
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