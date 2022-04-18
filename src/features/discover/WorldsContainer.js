import { useGetUsersQuery } from '../../app/services/worlds';
import { Link } from 'react-router-dom'
import styles from './Discover.module.css';
// import { useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress"
import Chip from '@mui/material/Chip'

//Container for worlds that are displayed on the discover page. Ex: "Popular", "Reccomended", "New", "Trending", "Favorites" etc
function WorldsContainer({ header }) {

    const { data, isLoading } = useGetUsersQuery()
    // const [description, toggleDescription] = useState(false)

    // const hoverHandler = () => {
    //     toggleDescription(!description)
    // }

    const renderWorlds = () => {
        return data.map(user => 
            user.world 
            ?
                <WorldPreview artist={user.artistName} key={user.world._id} world={user.world} />   
            :
                null 
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

function WorldPreview({ world, artist }){
    return(
        <div className={styles.previewCard}>
            <img alt="" width="300" height="300" src={world.referenceImages[0]}/>
            <Link to={`/worlds/${world._id}/world?artist=${artist}`}>
                {artist}'s World
            </Link>
            <div className="tagsContainer">
                {world.tags.map(tag => 
                    <Chip style={{margin: "10px 5px 0 5px"}} color={'primary'} variant="filled" key={tag} label={tag}/>    
                )}
            </div>
        </div>
    )
}

export default WorldsContainer;