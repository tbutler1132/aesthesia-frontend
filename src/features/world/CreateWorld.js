// import { Editor } from 'react-draft-wysiwyg'
import { useSelector, useDispatch } from 'react-redux';
import { setDescription, addTag, addReferenceImage } from './createWorldSlice';
// @ts-ignore
import SearchSpotify from './SearchSpotify.tsx';
import { WithContext as ReactTags } from 'react-tag-input'
import TextField from '@mui/material/TextField'
import Spotify from 'react-spotify-embed'
import Button from '@mui/material/Button'
import Upload from '../../components/Upload';

const KeyCodes = {
    comma: 188,
    enter: 13
  };

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function CreateWorld({ maxReferenceTracks, maxReferenceImages }) {
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
                    <ReferenceTrack key={el + i} url={referenceTracks[i]}/>
                    :
                    <SearchSpotify key={el + i} />
                }
            </>
        )
    }

    const renderReferenceImages = () => {
        return [...Array(maxReferenceImages)].map((el, i) => 
            <>
                {referenceTracks[i] ?
                    <ReferenceImage key={el + i} url={referenceTracks[i]}/>
                    :
                    <Upload key={el + i} submitHandler={referenceImageHandler}/>
                }
            </>
        )
    }

    const referenceImageHandler = (image) => {
        addReferenceImage(image)
    }

    return (
        <div className="createWorld">
            <h1>Description</h1>
            <h4>Write a captivating description of your world</h4>
            <TextField color='success' variant='outlined' fullWidth multiline rows={10} onChange={descriptionChangeHandler}/>
            <h1>Add Reference Tracks</h1>
            <h4>Select songs that will guide your world</h4>
            <div className="referenceContainer">
                {renderReferenceTracks()}
            </div>
            <div className="referenceContainer">
                {renderReferenceImages()}
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

function ReferenceImage({ url }){
    return(
        <image src={url}/>
    )
}

export default CreateWorld;