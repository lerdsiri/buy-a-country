import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';

import useFetchCountries from './components/hooks/useFetchCountries';

function App() {
  /*
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
  */

  const [countries] = useFetchCountries();
  const [filteredList, setFilteredList] = useState([]);
  
   /*
  let result = countries;
  setFilteredList(result);

  This code above results in infinite re-render loop.
  How to start filteredList with a full list of countries?
  */

  const searchFunc = (evt) => {
    let result = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().search(evt.target.value.toLowerCase()) !== -1
      );
    })

    setFilteredList(result); 
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home filteredList={filteredList} searchFunc={searchFunc} />} />
        <Route path='/details/:name' element={<CountryDetails filteredList={filteredList} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
