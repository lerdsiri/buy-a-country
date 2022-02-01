import React from 'react';
import CountryTable from '../CountryTable/CountryTable';
import SearchBar from '../SearchBar/SearchBar';

export default function Home({filteredList, searchFunc}) {
    return (
        <div>
            <SearchBar searchFunc={searchFunc} />
            <CountryTable filteredList={filteredList}/>
        </div>
    );
}
