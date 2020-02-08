import React from 'react';
import './button.css';

export const Button = ({name, value, handleClick}) => (
    <div className='search'>
       <button className ='btn' value={value} onClick={handleClick}>{name}</button>
    </div>
);