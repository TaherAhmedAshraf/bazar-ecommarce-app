const initialState = []

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {

        case "SET_PRODUCTS": {
            return state = action.payload;
        }

        default: {
            return state
        }
    }
}
