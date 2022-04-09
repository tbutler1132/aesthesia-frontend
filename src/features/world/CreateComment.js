import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm }from 'react-hook-form'
import { useCreateIterationCommentMutation } from '../../app/services/worlds';
// import { useParams } from 'react-router-dom';

function CreateComment({ songId }) {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [submitComment, /*result*/] = useCreateIterationCommentMutation()

    const onSubmit = (data) => {
        submitComment({id: songId, comment: {content: data.content, votes: 0}})
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("content")}/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default CreateComment;