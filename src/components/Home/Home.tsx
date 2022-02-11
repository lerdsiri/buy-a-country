import { memo } from 'react';

import CountryTable from '../CountryTable/CountryTable';
import NavBar from '../NavBar/NavBar';
import { HomeProp } from '../../types';

function Home({ handleChange, handleBuyClick, handleSortByName, handleSortByPop }: HomeProp) {
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

export default memo(Home);
