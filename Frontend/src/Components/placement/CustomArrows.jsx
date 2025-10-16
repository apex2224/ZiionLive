import React from 'react';
import "./CustomArrows.css";

export const NextArrows = ({ onClick }) => {
    return (
        <div className='custom-arrow next' onClick={onClick}>
            <div className='blue-bar' />
            <div className="arrows-icon">{'>'}</div>
        </div>
    )
}

export const PrevArrows = ({ onClick }) => {
    return (
        <div className='custom-arrow prev ' onClick={onClick}>
            <div className='blue-bar' />
            <div className="arrows-icon" style={{ transform: 'rotate(180deg)' }}>{'>'}</div>
        </div>
    )
}