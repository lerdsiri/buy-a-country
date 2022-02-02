import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import './CountryTable.css';

export default function CountryTable({filteredList}) {

    return (
        <Table striped bordered hover>
            <thead align='center'>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Languages</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {filteredList && filteredList.map((country) => {
                
                    return (
                        <tr key={country.name.common} align='center'>
                            <td><img src={country.flags.png} alt="" className="flags" /></td>
                            <td>
                                <Link to={`/details/${country.name.common}`}>{country.name.common}</Link>
                            </td>
                            <td align='right'>{country.population.toLocaleString('en-US')}</td>
                            <td>
                                {country.languages ? Object.values(country.languages).join(', ') : "No languages"}
                            </td>
                            <td>{country.region}</td>
                        </tr>
                    );
                })}            
            </tbody>
        </Table>
    );
}

CountryTable.displayName = 'CountryTable';
CountryTable.propTypes = {
    filteredList: PropTypes.arrayOf(PropTypes.object).isRequired
}