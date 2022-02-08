import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './NavBar.css';

export default function NavBar({handleChange}) {
    const numOfItems = useSelector((state) => state.cartReducer.numOfItems);

    return (
        <nav>
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
            <div className='cart-area'>
                <p className='cart-icon'><Link to='/cart'><FaShoppingCart /></Link></p>
                <p>Total items in Cart: {numOfItems}</p>
            </div>
        </nav>
        
    );
}

NavBar.displayName = 'NavBar';
NavBar.propTypes = {
    handleChange: PropTypes.func
}