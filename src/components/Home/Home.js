import React from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';

import CountryTable from '../CountryTable/CountryTable';
import NavBar from '../NavBar/NavBar';

function Home({ handleChange, handleBuyClick, handleSortByName, handleSortByPop }) {
    return (
        <div>
            <NavBar 
                handleChange={handleChange} 
                handleSortByName={handleSortByName} 
                handleSortByPop={handleSortByPop}
            />
            <CountryTable handleBuyClick={handleBuyClick} />
        </div>
    );
}

Home.displayName = 'Home';
Home.propTypes = {
    handleChange: PropTypes.func,
    handleBuyClick: PropTypes.func,
    handleSortByName: PropTypes.func,
    handleSortByPop: PropTypes.func,
}

export default memo(Home);
