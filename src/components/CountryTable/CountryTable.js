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
                    
                    let languages = [];
                    for(let key in country.languages) {
                        languages.push(country.languages[key]);
                    }
                    /*
                    languages = Object.values(country.languages);
                    When using Object.values() method, the code breaks.
                    i.e., fetch problem --> TypeError --> cannot
                    convert undefined or null to object.
                    Why?
                    */

                    return (
                        <tr key={country.name.common}>
                            <td><img src={country.flags.png} alt="" className="flags" /></td>
                            <td>
                                <Link to={`/details/${country.name.common}`}>{country.name.common}</Link>
                            </td>
                            <td>{country.population}</td>
                            <td>{languages.join(', ')}</td>
                            <td>{country.region}</td>
                        </tr>
                    );
                })}            
            </tbody>
        </Table>
    );
}
