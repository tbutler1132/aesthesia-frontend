import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useGetWorldQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import styles from './World.module.css';
import Spotify from 'react-spotify-embed'
import CircularProgress from "@mui/material/CircularProgress"

function World() {

    let { id } = useParams()
    const { data, isLoading } = useGetWorldQuery(id)

    if(isLoading) return <CircularProgress />
    return (
        <div className={styles.worldPage}>
            <Nav />
            <div className={styles.worldContainer}>
                <h1>Tim's World</h1>
                <h2>Description</h2>
                <div className={styles.container}>
                    <p>{data.description}</p>
                </div>
                <h2>Reference Songs</h2>
                <div id={styles.audioReferenceContainer} className={styles.container}>
                    {data.referenceSongs.map(song => 
                        <Spotify link={song}/> 
                        // <span key={song}>{song}</span> 
                    )}
                </div>
                <h2>Reference Art</h2>
                <div id={styles.imageReferenceContainer} className={styles.container}>
                    {data.referenceImages.map(image => 
                        <img key={image} height="200px" width="200px" src="https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-superJumbo.jpg" alt=""/>
                    )}
                </div>
                <h2>Tags</h2>
                <div className={styles.tagsContainer}>
                    {data.tags.map(tag => 
                        <div className={styles.tag} key={tag}>{tag}</div>    
                    )}
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default World;