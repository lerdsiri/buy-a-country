import rootReducer from "./redux/reducers/index"

//custom types
export type Country = {
    //properties needed for CountryTable.tsx
    flags: {png: string}
    name: {common: string}
    population: number
    languages: Languages
    region: string

    //additional properties needed for CountryDetails.tsx
    capital: string
    continents: string
    maps: {googleMaps: string}
    timezones: string

    //additional properties needed for Cart.tsx
    purchasedQuant: number
}

type Languages = {
    [key: string]: string
}


//Props
export type NavBarProp = {
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
    handleSortByName: () => void
    handleSortByPop: () => void
}

export type HomeProp = {
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
    handleBuyClick: (selectedCountry: Country) => void
    handleSortByName: () => void
    handleSortByPop: () => void
}

export type CountryTableProp = {
    handleBuyClick: (selectedCountry: Country) => void
}

export type CountryDetailsProp = {
    handleBackHomeClick: () => void
}

export type CartProp = {
    handleBackHomeClick: () => void
    handleIncQuant: (selectedCountry: Country) => void
    handleDecQuant: (selectedCountry: Country) => void
    handleRemove: (selectedCountry: Country) => void
}


//CountryListAction
const GET_COUNTRIES = "GET_COUNTRIES";
const FILTER_COUNTRIES = "FILTER_COUNTRIES";
const SORT_BY_NAME = "SORT_BY_NAME";
const SORT_BY_POP = "SORT_BY_POP";

export type ActionGetCountries = {
    type: typeof GET_COUNTRIES
    payload: {countries: Country[]}
}

export type ActionFilterCountries = {
    type: typeof FILTER_COUNTRIES
    payload: {searchTerm: string}
}

export type ActionSortByName = {
    type: typeof SORT_BY_NAME
}

export type ActionSortByPop = {
    type: typeof SORT_BY_POP
}

export type CountryListAction = ActionGetCountries | ActionFilterCountries | ActionSortByName | ActionSortByPop


//CartAction
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREASE_QUANT = "INCREASE_QUANT";
const DECREASE_QUANT = "DECREASE_QUANT";

export type ActionAddToCart = {
    type: typeof ADD_TO_CART
    payload: {selectedCountry: Country}
}

export type ActionRemoveFromCart = {
    type: typeof REMOVE_FROM_CART
    payload: {selectedCountry: Country}
}

export type ActionIncreaseQuant = {
    type: typeof INCREASE_QUANT
    payload: {selectedCountry: Country}
}

export type ActionDecreaseQuant = {
    type: typeof DECREASE_QUANT
    payload: {selectedCountry: Country}
}

export type CartAction = ActionAddToCart | ActionRemoveFromCart | ActionIncreaseQuant | ActionDecreaseQuant


//State and RootState
export type CountryReducerState = {
    countries: Country[]
    filteredList: Country[]
}

export type CartReducerState = {
    cart: Country[]
    numOfItems: number
}

export type RootState = ReturnType<typeof rootReducer>



