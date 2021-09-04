export const SET_USER = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}

export const SET_PRODUCTS = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products,
    }
}

export const ADD_TO_CART = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}