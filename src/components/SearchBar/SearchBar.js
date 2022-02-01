import './Search.css';
import React from 'react';

export default function SearchBar({searchFunc}) {
    return (
        <div className='search-bar'>
            <label className='label' htmlFor='search-term'><button><strong>SEARCH</strong></button></label>
            <input 
                id='search-term'
                type='text'  
                onChange={searchFunc} 
                placeholder="Search by country's name"
                className='search-box' 
            />
        </div>
    );
}
