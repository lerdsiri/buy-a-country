export function getCountries(countries) {
    return {
        type: "GET_COUNTRIES",
        payload: {countries}
    };
}

export function fetchCountries() {
    return (dispatch) => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => dispatch(getCountries(data)))
            .catch((error) => alert("Problem fetching data"));
    };
}

export function filterCountries(searchTerm) {
    return {
        type: "FILTER_COUNTRIES",
        payload: {searchTerm}
    }
}

export function setPurchased(purchasedCountry) {
    return {
        type: "PURCHASED",
        payload: {purchasedCountry}
    }
}