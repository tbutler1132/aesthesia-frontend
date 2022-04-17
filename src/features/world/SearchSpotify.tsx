import { useState } from 'react';
import { useLazySearchTracksQuery } from '../../app/services/spotify';
import { useDispatch } from 'react-redux';
import { addReferenceTrack } from './createWorldSlice';
import Spotify from 'react-spotify-embed'
import ButtonCard from '../../components/ButtonCard';

import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function SearchSpotify() {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const [searchTracks, result] = useLazySearchTracksQuery()


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitHandler = (e) => {
        e.preventDefault()
        searchTracks(searchQuery)
    }

    const queryChangeHandler = (e) => {
        setSearchQuery(e.target.value)
    }

    const renderSearchResults = () => {
        return result.data.map(track => 
            <SearchResult url={track.urls.spotify} /> 
        )
    }

    return (
        <>        
            <ButtonCard clickHandler={handleOpen} />
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={submitHandler}>
                        <input onChange={queryChangeHandler}/>
                        <input type="submit" />
                    </form>
                {result.isSuccess 
                ?
                renderSearchResults()
                :
                null
                
                }
                </Box>
            </Modal>
        </>
    );
}

function SearchResult({ url }){
    const dispatch = useDispatch()

    const addTrackClickHandler = () => {
        dispatch(addReferenceTrack(url))
    }
    return(
        <div>
            <Button onClick={addTrackClickHandler}>Add</Button>
            <Spotify wide link={url}/> 
        </div>
    )
}

export default SearchSpotify;