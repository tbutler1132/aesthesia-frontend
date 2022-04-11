import { useState } from 'react';
// import { useForm, FormProvider, useFormContext } from "react-hook-form";
// import { Editor } from 'react-draft-wysiwyg'
import { useSelector, useDispatch } from 'react-redux';
import { setDescription, addTag } from './createWorldSlice';
import SearchSpotify from './SearchSpotify';
import { WithContext as ReactTags } from 'react-tag-input'
import ButtonCard from '../../components/ButtonCard';
import TextField from '@mui/material/TextField'
import styles from './World.module.css';
import Spotify from 'react-spotify-embed'
import Button from '@mui/material/Button'

const KeyCodes = {
    comma: 188,
    enter: 13
  };

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function CreateWorld({ maxReferenceTracks }) {
    // const [tags, setTags] = useState([]);
    const tags = useSelector((state) => state.createWorld.tags)
    const referenceTracks = useSelector((state) => state.createWorld.referenceTracks)
    const dispatch = useDispatch()

    const descriptionChangeHandler = (e) => {
        dispatch(setDescription(e.target.value))
    }

    const handleAddition = tag => {
        dispatch(addTag(tag))
    };

    const renderReferenceTracks = () => {
        return [...Array(maxReferenceTracks)].map((el, i) => 
            <>
                {referenceTracks[i] ?
                    <ReferenceTrack url={referenceTracks[i]}/>
                    :
                    <SearchSpotify />
                }
            </>
        )
    }

    return (
        <div className={styles.createWorld}>
            <h1>Description</h1>
            <h4>Write a captivating description of your world</h4>
            <TextField color='success' variant='outlined' fullWidth multiline rows={10} onChange={descriptionChangeHandler}/>
            <h1>Add Reference Tracks</h1>
            <h4>Select songs that will guide your world</h4>
            <div className={styles.referenceContainer}>
                {renderReferenceTracks()}
            </div>
            <h1>Select Tags</h1>
            <h4>Choose words that describe your world</h4>
            <div>
                <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleAddition={handleAddition}
                inputFieldPosition="inline"
                autocomplete
                />
            </div>
            <Button variant='contained'>Create</Button>
        </div>
    );
}

function ReferenceTrack({ url }){
    return(
        <Spotify link={url}/>
    )
}

export default CreateWorld;