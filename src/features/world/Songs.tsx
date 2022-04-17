import { useGetWorldSongsQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
// @ts-ignore
import Nav from "./Nav.tsx";
import CircularProgress from "@mui/material/CircularProgress"


function Songs() {
    let { id } = useParams()
    const { data, isLoading } = useGetWorldSongsQuery(id)

    const renderSongs = () => {
        return data.map(song => 
            <Song key={song._id} song={song}/> 
        )
    }

if(isLoading) return <CircularProgress />
    return (
        <div>
            <Nav />
            {renderSongs()}
        </div>
    );
}

function Song({ song }){
    return(
        <div key={song._id}>
            {song.title}
        </div>   
    )
}

export default Songs;