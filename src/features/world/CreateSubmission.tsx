import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useCreateSubmissionMutation, useGetCurrentSongQuery } from '../../app/services/worlds'
import Upload from '../../components/Upload'

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
    overflow: "scroll"
};

function CreateSubmission() {

    let { id } = useParams()
    const { data, isLoading } = useGetCurrentSongQuery(id)
    const { register, reset, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);
    const [createSubmission] = useCreateSubmissionMutation()
    const [master, setMaster] = useState([])
    const [vocals, setVocals] = useState([])
    const [instruments, setInstruments] = useState([])
    const [bass, setBass] = useState([])
    const [drums, setDrums] = useState([])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = async (submission) => {
        const { 
            // bass,
            scale,
            bpm,
            description,
            // drums,
            // instruments,
            // master,
            // vocals
         } = submission

         const stems = [
             {
                 track: 'drums',
                 file: drums[0]
             },
             {
                 track: 'master',
                 file: master[0]
             },
             {
                 track: 'bass',
                 file: bass[0]
             },
             {
                 track: 'instruments',
                 file: instruments[0]
             },
             {
                 track: 'vocals',
                 file: vocals[0]
             },
         ]

         console.log(stems)

         
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
                    <Upload type="Master" files={master} setFiles={setMaster}/>
                    <Upload type="Drums" files={drums} setFiles={setDrums}/> 
                    <Upload type="Vocals" files={vocals} setFiles={setVocals}/> 
                    <Upload type="Instruments" files={instruments} setFiles={setInstruments}/> 
                    <Upload type="Bass" files={bass} setFiles={setBass}/> 
                    <form style={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-around"}} onSubmit={handleSubmit(onSubmit)}>
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="BPM" {...register("bpm")}/>    
                        <TextField label="Key" {...register("scale")}/>     
                        <TextField label="Description" multiline rows={8} {...register("description")}/>    
                        <Button type='submit'>Submit</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default CreateSubmission;