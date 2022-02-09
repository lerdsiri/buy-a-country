import { useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Cart from './components/Cart/Cart';
import { fetchCountries, filterCountries, sortByName, sortByPop } from './redux/actions/countryListActions';
import { addToCart, increaseQuant, decreaseQuant, removeFromCart } from './redux/actions/cartActions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchCountries());
  }, [dispatch]);

  //functions related to display
  const handleChange = useCallback((evt) => {
    dispatch(filterCountries(evt.target.value))
  }, [dispatch]);

  const handleBackHomeClick = useCallback(() => {
    dispatch(filterCountries(""));
  }, [dispatch]);

  const handleSortByName = useCallback(() => {
    dispatch(sortByName());
  }, [dispatch]);

  const handleSortByPop = useCallback(() => {
    dispatch(sortByPop());
  }, [dispatch])

//functions related to cart
  const handleBuyClick = useCallback((selectedCountry) => {
    dispatch(addToCart(selectedCountry));
  }, [dispatch]);

  const handleIncQuant = useCallback((selectedCountry) => {
    dispatch(increaseQuant(selectedCountry));
  }, [dispatch]);

  const handleDecQuant = useCallback((selectedCountry) => {
    dispatch(decreaseQuant(selectedCountry));
  }, [dispatch]);

  const handleRemove = useCallback((selectedCountry) => {
    dispatch(removeFromCart(selectedCountry));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home 
          handleChange={handleChange} 
          handleBuyClick={handleBuyClick} 
          handleSortByName={handleSortByName} 
          handleSortByPop={handleSortByPop}
        />} />
        <Route path='/details/:name' element={<CountryDetails handleBackHomeClick={handleBackHomeClick}/>} />
        <Route path='/cart' element={<Cart 
          handleBackHomeClick={handleBackHomeClick}
          handleIncQuant={handleIncQuant}
          handleDecQuant={handleDecQuant} 
          handleRemove={handleRemove}
        />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
