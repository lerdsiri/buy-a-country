import React from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';

import CountryTable from '../CountryTable/CountryTable';
import NavBar from '../NavBar/NavBar';

function Home({handleChange, handleBuyClick}) {
    return (
        <div>
            <NavBar handleChange={handleChange} />
            <CountryTable handleBuyClick={handleBuyClick} />
        </div>
    );
}

Home.displayName = 'Home';
Home.propTypes = {
    handleChange: PropTypes.func
}

export default memo(Home);
