const initialState = {
    countries: [],
    filteredList: [],
};

export default function countryReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload.countries,
                filteredList: action.payload.countries
            };
        
        case "FILTER_COUNTRIES":
            let result = state.countries.filter((country) => {
                return (
                  country.name.common.toLowerCase().search(action.payload.searchTerm.toLowerCase()) !== -1
                );
              })
            return {
                ...state,
                filteredList: result
            };

        default:
            return state;
    }
}