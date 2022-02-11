import { useParams, Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import './CountryDetails.css';
import { CountryDetailsProp, RootState } from '../../types';

export default function CountryDetails({handleBackHomeClick}: CountryDetailsProp) {
    const {name} = useParams();
    const filteredList = useSelector((state: RootState) => state.countryReducer.filteredList);

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

            <button className='back-btn' onClick={handleBackHomeClick}><Link to='/'>Back to Homepage</Link></button>
        </div>
    );
}
