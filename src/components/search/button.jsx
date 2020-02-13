import React from 'react';
import './button.css';

export const Button = ({name, icon, value, handleClick}) => (
    <div className='button'>
       <button className ='btn' value={value} onClick={handleClick}>{name}<span><i className={icon} aria-hidden="true"></i></span> </button>
    </div>
);