import React from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';

import CountryTable from '../CountryTable/CountryTable';
import SearchBar from '../SearchBar/SearchBar';

function Home({handleChange}) {
    return (
        <div>
            <SearchBar handleChange={handleChange} />
            <CountryTable />
        </div>
    );
}

Home.displayName = 'Home';
Home.propTypes = {
    handleChange: PropTypes.func
}

export default memo(Home);
