import { useGetWorldSongsQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

function Songs() {
    let { id } = useParams()
    const { data, isLoading } = useGetWorldSongsQuery(id)

    console.log(data)

    const renderSongs = () => {
        return data.map(song => 
            <div key={song._id}>
                {song.title}
            </div>    
        )
    }

    if(isLoading) return <div>Loading...</div>
    return (
        <div>
            <Nav />
            {renderSongs()}
        </div>
    );
}

export default Songs;