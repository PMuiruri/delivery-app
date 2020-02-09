import React from 'react';
import './button.css';

export const Button = ({name, value, handleClick}) => (
    <div className='search'>
       <button className ='btn' value={value} onClick={handleClick}><span className="icon icon 1"><i className={name} aria-hidden="true"></i></span></button>
    </div>
);