const initialState = {
    cart: [],
    numOfItems: 0,
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            {
                const updatedCart = [...state.cart];
                const selectedCountry = action.payload.selectedCountry;

                if(!updatedCart.some((cartedCountry) => cartedCountry.name.common === selectedCountry.name.common)) {
                    selectedCountry.purchasedQuant = 1;
                    updatedCart.push(selectedCountry);
                } else {
                    updatedCart.forEach((cartedCountry) => {
                        if(cartedCountry.name.common === selectedCountry.name.common) {
                            cartedCountry.purchasedQuant += 1;
                        }
                    });
                }

                return {
                    ...state,
                    cart: updatedCart,
                    numOfItems: state.numOfItems + 1,
                };
            }
        
        case "REMOVE_FROM_CART":
            {
                const updatedCart = [...state.cart];
                const selectedCountry = action.payload.selectedCountry; 
                let quantToRemove = 0;   
                
                updatedCart.forEach((cartedCountry) => {
                    if(cartedCountry.name.common === selectedCountry.name.common) {
                        quantToRemove = cartedCountry.purchasedQuant;
                        const index = updatedCart.findIndex((element) => element.name.common === cartedCountry.name.common);
                        updatedCart.splice(index, 1);
                    }
                })

                return {
                     ...state,
                     cart: updatedCart,
                     numOfItems: state.numOfItems - quantToRemove,
                };
            }

        case "INCREASE_QUANT":
            {
                const updatedCart = [...state.cart];
                const selectedCountry = action.payload.selectedCountry; 
                
                updatedCart.forEach((cartedCountry) => {
                    if(cartedCountry.name.common === selectedCountry.name.common) {
                        cartedCountry.purchasedQuant += 1;
                    }
                });

                return {
                    ...state,
                    cart: updatedCart,
                    numOfItems: state.numOfItems + 1
                };
            }

        case "DECREASE_QUANT":
            {
                const updatedCart = [...state.cart];
                const selectedCountry = action.payload.selectedCountry;    

                updatedCart.forEach((cartedCountry) => {
                    if(cartedCountry.name.common === selectedCountry.name.common) {
                        if(cartedCountry.purchasedQuant > 1) {
                            cartedCountry.purchasedQuant -= 1;
                        } else {
                            const index = updatedCart.findIndex((element) => element.name.common === cartedCountry.name.common);
                            updatedCart.splice(index, 1);
                        }
                    }
                });

                return {
                     ...state,
                     cart: updatedCart,
                     numOfItems: state.numOfItems - 1,
                };
            }

        default:
            return state;
    }
}
 