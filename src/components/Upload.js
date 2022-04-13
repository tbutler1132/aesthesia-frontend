import { useState } from "react";

function Upload({ submitHandler }) {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        submitHandler(value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Upload;