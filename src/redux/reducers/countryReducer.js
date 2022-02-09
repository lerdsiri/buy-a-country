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
        
        case "SORT_BY_NAME":
            return {
                ...state,
                countries: [...state.countries].sort((a,b) => a.name.common.localeCompare(b.name.common)),
                filteredList: [...state.filteredList].sort((a,b) => a.name.common.localeCompare(b.name.common))
            }

        case "SORT_BY_POP":
            return {
                ...state,
                countries: [...state.countries].sort((a,b) => a.population - b.population),
                filteredList: [...state.filteredList].sort((a,b) => a.population - b.population)
            }
        
        default:
            return state;
    }
}