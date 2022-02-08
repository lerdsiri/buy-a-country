import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

import './CountryTable.css';

export default function CountryTable({handleBuyClick}) {
    const filteredList = useSelector((state) => state.countryReducer.filteredList);

    return (
        <Table striped bordered hover>
            <thead align='center'>
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
                        <tr key={country.name.common} align='center'>
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
                                <button className={country.purchased ? "buy-btn faded-buy-btn" : "buy-btn"} onClick={() => handleBuyClick(country)}><strong>Add to cart</strong></button>
                            </td>
                        </tr>
                    );
                })}            
            </tbody>
        </Table>
    );
}

CountryTable.displayName = 'CountryTable';