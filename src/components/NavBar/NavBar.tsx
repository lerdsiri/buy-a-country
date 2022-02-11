import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './NavBar.css';
import { NavBarProp, RootState } from '../../types';

export default function NavBar({ handleChange, handleSortByName, handleSortByPop }: NavBarProp) {
    const numOfItems = useSelector((state: RootState) => state.cartReducer.numOfItems);

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
                <button onClick={handleSortByName}>Sort By Name</button>
                <button onClick={handleSortByPop}>Sort By Population</button>
            </div>
            <div className='cart-area'>
                <p className='cart-icon'><Link to='/cart'><FaShoppingCart /></Link></p>
                <p>Total items in Cart: {numOfItems}</p>
            </div>
        </nav>
        
    );
}
