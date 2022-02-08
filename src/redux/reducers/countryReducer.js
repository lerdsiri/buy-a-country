const initialState = {
    countries: [],
    filteredList: [],
};

export default function countryReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_COUNTRIES":
            const fullList = action.payload.countries;
            fullList.forEach((country) => {
                country.purchased = false;
            });

            return {
                ...state,
                countries: fullList,
                filteredList: fullList
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

        case "PURCHASED":
            const updatedList = state.filteredList;
            const purchasedCountry = action.payload.purchasedCountry;
            updatedList.forEach((country) => {
                if(country.name.common === purchasedCountry.name.common) {
                    country.purchased = true;
                }
            })
            return {
                ...state,
                filteredList: updatedList
            };
        
        default:
            return state;
    }
}