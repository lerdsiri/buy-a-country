export function addToCart(selectedCountry) {
    return {
        type: "ADD_TO_CART",
        payload: {selectedCountry}
    };
}

export function removeFromCart(selectedCountry) {
    return {
        type: "REMOVE_FROM_CART",
        payload: {selectedCountry}
    };
}

export function increaseQuant(selectedCountry) {
    return {
        type: "INCREASE_QUANT",
        payload: {selectedCountry}
    };
}

export function decreaseQuant(selectedCountry) {
    return {
        type: "DECREASE_QUANT",
        payload: {selectedCountry}
    };
}