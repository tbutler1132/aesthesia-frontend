import Nav from "./Nav";
import DiscussionContainer from "./DiscussionContainer";
import { useGetCurrentSongQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"

function CurrentSong() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)

    const currentIteration = () => {
        return data.iterations.find(iteration => iteration.current)
    }

    const renderStems = () => {
        return currentIteration().stems.map(stem => 
            <p key={stem._id}>{stem.track}: {stem.file}</p>
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
                    <div>
                        <h3>{currentIteration().bpm}</h3>
                        <p>Master:</p>
                        {renderStems()}
                        <hr />
                        <DiscussionContainer />
                    </div>
            }
        </div>
    );
}

export default CurrentSong;