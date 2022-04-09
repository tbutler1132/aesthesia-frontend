import Nav from "./Nav";
import DiscussionContainer from "./DiscussionContainer";
import { useGetCurrentSongQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"

function CurrentSong() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)

    const renderStems = () => {
        return data.currentIteration.stems.map(stem => 
            <Stem key={stem._id} stem={stem}/>
        )
    }

    return (
        <div>
            <Nav />
            <hr />
            {isLoading 
                ? 
                    <CircularProgress color="secondary"/>
                :
                    <>
                        <button>Vote complete</button>
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