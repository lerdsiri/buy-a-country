import { useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { fetchCountries } from './redux/actions';
import { filterCountries } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = useCallback((evt) => {
    dispatch(filterCountries(evt.target.value))
  }, [dispatch]);

  const handleClick = useCallback(() => {
    dispatch(filterCountries(""));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home handleChange={handleChange} />} />
        <Route path='/details/:name' element={<CountryDetails handleClick={handleClick}/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
