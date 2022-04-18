import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function ButtonCard({ clickHandler }) {
    return (
        <div className='button-card'>
            <AddIcon style={{color: "black", cursor: "pointer"}} onClick={() => clickHandler()} />
        </div>
    );
}

export default ButtonCard;