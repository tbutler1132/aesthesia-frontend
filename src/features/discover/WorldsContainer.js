import { useGetWorldsQuery } from '../../app/services/worlds';
import { Link } from 'react-router-dom'
import styles from './Discover.module.css';
// import { useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress"

//Container for worlds that are displayed on the discover page. Ex: "Popular", "Reccomended", "New", "Trending", "Favorites" etc
function WorldsContainer({ header }) {

    const { data, isLoading } = useGetWorldsQuery()
    // const [description, toggleDescription] = useState(false)

    // const hoverHandler = () => {
    //     toggleDescription(!description)
    // }

    const renderWorlds = () => {
        return data.map(world => 
            <WorldPreview key={world._id} world={world} />    
        )
    }

    //Fetch worlds, map cards

    if(isLoading) return <CircularProgress />
    return (
        <div className={styles.container}>
            <h2>{header}</h2>
            <div className={styles.containerChild}>
                {/* {description 
                    ?
                        <>
                            <div onMouseLeave={hoverHandler} style={{border: "solid", height: "300px", width: "300px"}}>
                                {data[0].description}
                            </div>
                            <Link to={`/worlds/${data[0]._id}`}>
                                {data[0]._id}
                            </Link>
                        </>
                    : */}
                {renderWorlds()}
                        {/* <div onMouseEnter={hoverHandler} className={styles.previewCard}>
                            <img width="300" height="300" src={data[0].referenceImages[0]}/>
                            <Link to={`/worlds/${data[0]._id}`}>
                                {data[0]._id}
                            </Link>
                        </div> */}
                {/* }    */}
            </div>
        </div>
    );
}

function WorldPreview({ world }){
    return(
        <div className={styles.previewCard}>
            <img alt="" width="300" height="300" src={world.referenceImages[0]}/>
            <Link to={`/worlds/${world._id}/world`}>
                {world._id}'s World
            </Link>
        </div>
    )
}

export default WorldsContainer;