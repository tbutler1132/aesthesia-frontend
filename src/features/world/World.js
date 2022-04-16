import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useGetWorldQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
// import styles from './World.module.css';
import Spotify from 'react-spotify-embed'
import CircularProgress from "@mui/material/CircularProgress"
import Chip from "@mui/material/Chip"

function World() {

    let { id } = useParams()
    const { data, isLoading } = useGetWorldQuery(id)

    if(isLoading) return <CircularProgress />
    return (
        <div className="worldPage">
            <Nav />
            <div className="worldContainer">
                <h1>Tim's World</h1>
                <h2>Description</h2>
                <div style={{justifyContent: "flex-start"}} className="container">
                    <p>{data.description}</p>
                </div>
                <h2>Reference Songs</h2>
                <div id="audioReferenceContainer" className="container">
                    {data.referenceSongs.map(song => 
                        <Spotify link={song}/> 
                        // <span key={song}>{song}</span> 
                    )}
                </div>
                <h2>Reference Art</h2>
                <div id="imageReferenceContainer" className="container">
                    {data.referenceImages.map(image => 
                        <img key={image} height="300px" width="300px" src={image} alt=""/>
                    )}
                </div>
                <h2>Tags</h2>
                <div className="tagsContainer">
                    {data.tags.map(tag => 
                        <Chip style={{marginLeft: "10px"}} size="large" color="primary" variant="outlined" key={tag} label={tag}/>    
                    )}
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default World;