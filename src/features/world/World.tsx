import { Outlet } from "react-router-dom";
// @ts-ignore
import Nav from "./Nav.tsx";
import { useGetWorldQuery } from "../../app/services/worlds";
import { useParams, useSearchParams } from "react-router-dom";
import Spotify from 'react-spotify-embed'
import CircularProgress from "@mui/material/CircularProgress"
import Chip from "@mui/material/Chip"

function World() {

    let { id, artist } = useParams()
    let [searchParams, setSearchParams] = useSearchParams()
    const { data, isLoading } = useGetWorldQuery(id)

    console.log(searchParams, "PARAMS")

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
                <ReferenceContainer referenceType="Songs" data={data.referenceSongs}/>
                <ReferenceContainer referenceType="Art" data={data.referenceImages}/>
                <TagsContainer tagColor="primary" tags={data.tags}/>
                <Outlet />
            </div>
        </div>
    );
}

interface ReferenceContainerProps {
    referenceType: string
    data: any
}

function ReferenceContainer({ referenceType, data }: ReferenceContainerProps){
    return(
        <>
            <h2>Reference {referenceType}</h2>
            <div className="container">
                {referenceType === "Songs"
                    ?
                        data.map(song => 
                            <Spotify key={song._id} link={song}/>
                        )
                    :
                        data.map(art => 
                            <img key={art} height="300px" width="300px" src={art} alt=""/>
                        )
                }
            </div>
        </>
    )
}

function TagsContainer({ tags, tagColor }){
    return(
        <>
            <h2>Tags</h2>
            <div className="tagsContainer">
                {tags.map(tag => 
                    <Chip style={{marginLeft: "10px"}} color={tagColor} variant="outlined" key={tag} label={tag}/>    
                )}
            </div>
        </>
    )
}

export default World;