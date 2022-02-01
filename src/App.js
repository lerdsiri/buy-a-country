import './App.css';
import { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
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
  }, []) ;
  
  const searchFunc = (evt) => {
    let results = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().search(evt.target.value.toLowerCase()) !== -1
      );
    })

    setFilteredList(results);
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
