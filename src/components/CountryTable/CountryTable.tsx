import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

import './CountryTable.css';
import { CountryTableProp, RootState } from '../../types';

export default function CountryTable({handleBuyClick}: CountryTableProp) {
    const filteredList = useSelector((state: RootState) => state.countryReducer.filteredList);

    const cart = useSelector((state: RootState) => state.cartReducer.cart);

    const cartItems = cart.map((country) => country.name.common);

    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Languages</th>
                    <th>Region</th>
                    <th>Purchase</th>
                </tr>
            </thead>
            <tbody>
                {filteredList && filteredList.map((country) => {
                
                    return (
                        <tr key={country.name.common}>
                            <td><img src={country.flags.png} alt="flag" className="flags" /></td>
                            <td>
                                <Link to={`/details/${country.name.common}`}>{country.name.common}</Link>
                            </td>
                            <td align='right'>{country.population.toLocaleString('en-US')}</td>
                            <td>
                                {country.languages ? Object.values(country.languages).join(', ') : "No languages"}
                            </td>
                            <td>{country.region}</td>
                            <td>
                                <button 
                                    onClick={() => handleBuyClick(country)}
                                    className={cartItems.includes(country.name.common) ? "buy-btn inactive" : "buy-btn"}
                                    disabled={cartItems.includes(country.name.common)} 
                                >
                                    <strong>Add to cart</strong>
                                </button>
                            </td>
                        </tr>
                    );
                })}            
            </tbody>
        </Table>
    );
}

CountryTable.displayName = 'CountryTable';