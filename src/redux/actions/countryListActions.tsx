import { Dispatch } from "redux";

import { Country, ActionGetCountries, CountryListAction, ActionFilterCountries, ActionSortByName, ActionSortByPop } from "../../types";

export function getCountries(countries: Country[]): ActionGetCountries {
    return {
        type: "GET_COUNTRIES",
        payload: {countries}
    };
}

export function fetchCountries() {
    return (dispatch: Dispatch<CountryListAction>) => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => dispatch(getCountries(data)))
            .catch((error) => alert("Problem fetching data"));
    };
}

export function filterCountries(searchTerm: string): ActionFilterCountries {
    return {
        type: "FILTER_COUNTRIES",
        payload: {searchTerm}
    }
}

export function sortByName(): ActionSortByName {
    return {
        type: "SORT_BY_NAME",
    }
}

export function sortByPop(): ActionSortByPop {
    return {
        type: "SORT_BY_POP",
    }
}