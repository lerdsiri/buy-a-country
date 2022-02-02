import React from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';

import CountryTable from '../CountryTable/CountryTable';
import SearchBar from '../SearchBar/SearchBar';

function Home({filteredList, handleChange}) {
    return (
        <div>
            <SearchBar handleChange={handleChange} />
            <CountryTable filteredList={filteredList}/>
        </div>
    );
}

Home.displayName = 'Home';
Home.propTypes = {
    filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChange: PropTypes.func
}

export default memo(Home);
