import { combineReducers } from 'redux';

import countryReducer from './countryReducer';
import cartReducer from './cartReducer';

export const rootReducer = combineReducers({countryReducer, cartReducer});

export default rootReducer;
