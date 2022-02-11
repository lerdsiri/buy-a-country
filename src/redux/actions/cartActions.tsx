import { Country, ActionAddToCart, ActionRemoveFromCart, ActionIncreaseQuant, ActionDecreaseQuant } from "../../types";


export function addToCart(selectedCountry: Country): ActionAddToCart {
    return {
        type: "ADD_TO_CART",
        payload: {selectedCountry}
    };
}

export function removeFromCart(selectedCountry: Country): ActionRemoveFromCart {
    return {
        type: "REMOVE_FROM_CART",
        payload: {selectedCountry}
    };
}

export function increaseQuant(selectedCountry: Country): ActionIncreaseQuant {
    return {
        type: "INCREASE_QUANT",
        payload: {selectedCountry}
    };
}

export function decreaseQuant(selectedCountry: Country): ActionDecreaseQuant {
    return {
        type: "DECREASE_QUANT",
        payload: {selectedCountry}
    };
}