import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm }from 'react-hook-form'
import { useCreateIterationCommentMutation } from '../../app/services/worlds';
// import { useParams } from 'react-router-dom';

function CreateComment({ songId }) {



    const { register, resetField, handleSubmit, watch, formState: { errors } } = useForm();
    const [submitComment, /*result*/] = useCreateIterationCommentMutation()

    const onSubmit = (data) => {
        submitComment({id: songId, comment: {content: data.content, votes: 0}})
        resetField("content")
    }

    return (
        <div className='create-comment'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField placeholder='Write a comment' style={{backgroundColor: "grey"}} variant="outlined" fullWidth {...register("content")}/>
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
}

export default CreateComment;