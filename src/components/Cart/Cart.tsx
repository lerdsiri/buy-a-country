import React from 'react';
import {Link} from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';

import './Cart.css';
import { CartProp, RootState } from '../../types';

export default function Cart({handleBackHomeClick, handleIncQuant, handleDecQuant, handleRemove}: CartProp) {

    const { cart, numOfItems } = useSelector((state: RootState) => state.cartReducer);
    
    console.log(cart);
    console.log(numOfItems);

    if (!cart.length) {
        return (
            <div>
                <h2 className='cart-icon'>Cart is empty!</h2>
                <button className='back-btn' onClick={handleBackHomeClick}>
                    <Link to='/'>Back to Homepage</Link>
                </button>
            </div>
        ); 
    }

    return (
        <div className='cart-page'>
            <h2 className='cart-icon'><FaShoppingCart /></h2>
            <p>Number of items in cart: {numOfItems}</p>

            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((country) => {
                        return (
                            <tr key={country.name.common}>
                                <td><img src={country.flags.png} alt="flag" className="flags" /></td>
                                <td>{country.name.common}</td>
                                <td>Priceless</td>
                                <td>
                                    <button onClick={() => handleIncQuant(country)}>+</button>
                                    {country.purchasedQuant}
                                    <button onClick={() => handleDecQuant(country)}>-</button>
                                </td>
                                <td>
                                    <button onClick={() => handleRemove(country)}>REMOVE</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <button className='back-btn' onClick={handleBackHomeClick}>
                <Link to='/'>Back to Homepage</Link>
            </button>
        </div>
    );
}

Cart.displayName = 'Cart';
Cart.propTypes = {
    handleBackHomeClick: PropTypes.func,
    handleIncQuant: PropTypes.func,
    handleDecQuant: PropTypes.func,
    handleRemove: PropTypes.func
}