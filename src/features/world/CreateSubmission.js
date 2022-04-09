import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useCreateSubmissionMutation, useGetCurrentSongQuery, useAddSubmissionToSongMutation } from '../../app/services/worlds'

import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'

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

function CreateSubmission() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);
    const [createSubmission, result] = useCreateSubmissionMutation()
    const [addSubmission] = useAddSubmissionToSongMutation()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = async (submission) => {
        const { 
            bass,
            bpm,
            description,
            drums,
            instruments,
            master,
            scale,
            vocals
         } = submission

        createSubmission(
            {id: data._id, 
            submission: {
                bass,
                bpm,
                description,
                drums,
                instruments,
                master,
                scale,
                vocals
            }
        })



        // addSubmission({
        //     id,

        // })
        
    }

    if(isLoading) return <div>Loading...</div>
    return (
        <>        
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField label="BPM" {...register("bpm")}/>    
                        <TextField label="Key" {...register("scale")}/>    
                        <TextField label="Master" {...register("master")}/>    
                        <TextField label="Drums" {...register("drums")}/>    
                        <TextField label="Vocals" {...register("vocals")}/>    
                        <TextField label="Instruments" {...register("instruments")}/>    
                        <TextField label="Bass" {...register("bass")}/>    
                        <TextField label="Description" multiline {...register("description")}/>    
                        <input type='submit'/>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default CreateSubmission;