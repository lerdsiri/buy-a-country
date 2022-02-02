//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import useFetchCountries from './components/hooks/useFetchCountries';
import './App.css';

function App() {
  const [filteredList, searchFunc] = useFetchCountries();

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
