import './CountryDetails.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function CountryDetails({filteredList}) {
    const {name} = useParams();

    let country = filteredList.filter(country => country.name.common === {name}.name)[0];
    console.log(country);

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

            <button className='back-btn'><Link to='/'>Back to Homepage</Link></button>
        </div>
    );
}

//add a button to take us back to Home
