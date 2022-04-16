import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useGetWorldQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import styles from './World.module.css';
import Spotify from 'react-spotify-embed'
import CircularProgress from "@mui/material/CircularProgress"
import Chip from "@mui/material/Chip"

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
                <div style={{justifyContent: "flex-start"}} className={styles.container}>
                    <p>{data.description}</p>
                </div>
                <ReferenceContainer referenceType="audio" data={data.referenceSongs}/>
                <ReferenceContainer referenceType="images" data={data.referenceImages}/>
                <h2>Tags</h2>
                <div className={styles.tagsContainer}>
                    {data.tags.map(tag => 
                        <Chip style={{marginLeft: "10px"}} color="primary" variant="outlined" key={tag} label={tag}/>    
                    )}
                </div>
                <Outlet />
            </div>
        </div>
    );
}

function ReferenceContainer({referenceType, data}){
    return(
        <>
            <h2>Reference {referenceType === "audio" ? "Songs" : "Art"}</h2>
            <div className={styles.container}>
                {referenceType === "audio"
                    ?
                        data.map(audio => 
                            <Spotify key={audio._id} link={audio}/>
                        )
                    :
                        data.map(image => 
                            <img key={image} height="300px" width="300px" src={image} alt=""/>
                        )
                }
            </div>
        </>
    )
}

export default World;