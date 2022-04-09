import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm }from 'react-hook-form'
import { useCreateIterationCommentMutation } from '../../app/services/worlds';

function CreateComment({ songId }) {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [submitComment, result] = useCreateIterationCommentMutation()

    const onSubmit = (data) => {
        console.log(data)
        submitComment({songId, comment: {content: data.content, votes: 0}})
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