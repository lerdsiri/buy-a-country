import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './CountryDetails.css';

export default function CountryDetails({filteredList, handleClick}) {
    const {name} = useParams();

    let country = filteredList.filter(country => country.name.common === {name}.name)[0];

    return (
        <div className='details'>
            <Card style={{ width: '25rem' }} className='card'>
                <Card.Header><strong>{country.name.common}</strong></Card.Header>
                <ListGroup variant="flush">
                    <ListGroupItem>Capital: {country.capital}</ListGroupItem>
                    <ListGroupItem>Continent: {country.continents}</ListGroupItem>
                    <ListGroupItem>Map: {country.maps.googleMaps}</ListGroupItem>
                    <ListGroupItem>Population: {country.population}</ListGroupItem>
                    <ListGroupItem>Time Zone: {country.timezones}</ListGroupItem>
                </ListGroup>
            </Card>

            <button className='back-btn' onClick={handleClick}><Link to='/'>Back to Homepage</Link></button>
        </div>
    );
}

CountryDetails.displayName = 'CountryDetails';
CountryDetails.propTypes = {
    filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func
}
