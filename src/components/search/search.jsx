import React from 'react';
import './search.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className=''>
        <input 
            className='search-input'
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    </div>
);