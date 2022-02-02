import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import useFetchCountries from './components/hooks/useFetchCountries';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList] = useFetchCountries(searchTerm);

  const handleChange = useCallback((evt) => {
    setSearchTerm(evt.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home filteredList={filteredList} handleChange={handleChange} />} />
        <Route path='/details/:name' element={<CountryDetails filteredList={filteredList} handleClick={handleClick}/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
