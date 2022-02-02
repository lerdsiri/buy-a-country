import { useState, useEffect } from 'react';

export default function useFetchCountries(searchTerm) {
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

  useEffect(() => {
    let result = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().search(searchTerm.toLowerCase()) !== -1
      );
    })

    setFilteredList(result); 

  }, [countries, searchTerm]);

  return [filteredList];
}
