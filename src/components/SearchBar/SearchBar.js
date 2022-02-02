import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

export default function SearchBar({handleChange}) {
    return (
        <div className='search-bar'>
            <label className='label' htmlFor='search-term'><strong>SEARCH</strong></label>
            <input 
                id='search-term'
                type='text'  
                onChange={handleChange} 
                placeholder="Search by country's name"
                className='search-box' 
            />
        </div>
    );
}

SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = {
    handleChange: PropTypes.func
}