import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useCreateSubmissionMutation, useGetCurrentSongQuery } from '../../app/services/worlds'

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
    const { register, reset, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);
    const [createSubmission] = useCreateSubmissionMutation()

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

         const stems = [
             {
                 track: 'drums',
                 file: drums
             },
             {
                 track: 'master',
                 file: master
             },
             {
                 track: 'bass',
                 file: bass
             },
             {
                 track: 'instruments',
                 file: instruments
             },
             {
                 track: 'vocals',
                 file: vocals
             },
         ]

         
        createSubmission(
            {id: data._id, 
            submission: {
                bpm,
                description,
                scale,
                stems: stems
            }
        })


        setOpen(false)
        reset()
    }
    // const renderKeyOptions = () => {
    //     const arr = [
    //         "C major",
    //         "C#/Db major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //         // "A major",
    //     ]

    //     return arr.map(scale => 
    //         <MenuItem value={scale}>{scale}</MenuItem>
    //     )
    // }



    // addSubmission({
    //     id,

    // })

    if(isLoading) return <Button disabled>Open modal</Button>
    return (
        <>        
            <Button variant='outlined' color='success' onClick={handleOpen}>Create Submission</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Submission
                    </Typography>
                    <form style={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-around"}} onSubmit={handleSubmit(onSubmit)}>
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="BPM" {...register("bpm")}/>    
                        <TextField label="Key" {...register("scale")}/>    
                        <TextField label="Master" {...register("master")}/>    
                        <TextField label="Drums" {...register("drums")}/>    
                        <TextField label="Vocals" {...register("vocals")}/>    
                        <TextField label="Instruments" {...register("instruments")}/>    
                        <TextField label="Bass" {...register("bass")}/>    
                        <TextField label="Description" multiline rows={8} {...register("description")}/>    
                        <Button type='submit'>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default CreateSubmission;