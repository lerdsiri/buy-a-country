import { useState, useEffect } from 'react';

export default function useFetchCountries() {
    const [countries, setCountries] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setFilteredList(data);
            })
            .catch((error) => alert("Problem fetching data"));
    }, []);

    const searchFunc = (evt) => {
        let result = countries.filter((country) => {
          return (
            country.name.common.toLowerCase().search(evt.target.value.toLowerCase()) !== -1
          );
        })
    
        setFilteredList(result); 
      }

    return [filteredList, searchFunc];
}
