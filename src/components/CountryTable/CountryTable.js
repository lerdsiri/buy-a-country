import './CountryTable.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function CountryTable({filteredList}) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Lang</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {filteredList && filteredList.map((country) => {
                    
                    return (
                        <tr key={country.name.common}>
                            <td><img src={country.flags.png} alt="" className="flags" /></td>
                            <td>
                                <Link to={`/details/${country.name.common}`}>{country.name.common}</Link>
                            </td>
                            <td>{country.population}</td>
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
