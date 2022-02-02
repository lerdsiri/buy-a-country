import { useState, useEffect } from 'react';

export default function useFetchCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((error) => alert("Problem fetching data"));
    }, []);

    return [countries];
}
