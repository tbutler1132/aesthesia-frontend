import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useGetWorldQuery } from "../../app/services/worlds";
import { useParams } from "react-router-dom";
import styles from './World.module.css';

function World() {

    let { id } = useParams()
    const { data, isLoading } = useGetWorldQuery(id)

    if(isLoading) return <div>Loading...</div>
    return (
        <>
        <Nav />
        <div className={styles.worldContainer}>
            <h2>Description</h2>
            <div className={styles.descriptionContainer}>
                <p>{data.description}</p>
            </div>
            <div id={styles.audioReferenceContainer} className={styles.carosuelContainer}>
                {data.referenceSongs.map(song => 
                    <span key={song}>{song} </span>    
                )}
            </div>
            <div id={styles.imageReferenceContainer} className={styles.carosuelContainer}>
                {data.referenceImages.map(image => 
                    <span key={image}>{image} </span>    
                )}
            </div>
            <div className={styles.tagsContainer}>
                {data.tags.map(tag => 
                    <span key={tag}>{tag} </span>    
                )}
            </div>
            <Outlet />
        </div>
        </>
    );
}

export default World;