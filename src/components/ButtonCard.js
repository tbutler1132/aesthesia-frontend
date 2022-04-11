import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function ButtonCard({ clickHandler }) {
    return (
        <div className='button-card'>
            <AddIcon onClick={() => clickHandler()} />
        </div>
    );
}

export default ButtonCard;