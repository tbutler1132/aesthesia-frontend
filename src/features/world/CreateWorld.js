import { useState } from 'react';
// import { useForm, FormProvider, useFormContext } from "react-hook-form";
// import { Editor } from 'react-draft-wysiwyg'
import { useSelector, useDispatch } from 'react-redux';
import { setDescription, addTag } from './createWorldSlice';
import SearchSpotify from './SearchSpotify';
import { WithContext as ReactTags } from 'react-tag-input'

function CreateWorld() {
    // const [tags, setTags] = useState([]);
    const tags = useSelector((state) => state.createWorld.tags)
    const dispatch = useDispatch()

    const descriptionChangeHandler = (e) => {
        dispatch(setDescription(e.target.value))
    }

    const handleAddition = tag => {
        dispatch(addTag(tag))
      };

    return (
        <div>
            <label>Dedscription</label>
            <textarea onChange={descriptionChangeHandler}/>
            <label>Add reference tracks</label>
            <div style={{border: "solid"}}>
                <div>
                    <SearchSpotify />
                </div>
                <div>
                    Card
                </div>
                <div>
                    Card
                </div>
            </div>
            <div>
                <ReactTags
                tags={tags}
                handleAddition={handleAddition}
                inputFieldPosition="bottom"
                autocomplete
                />
            </div>
            <input type="submit"/>
        </div>
    );
}

export default CreateWorld;