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

export const INCREMENT = (id) => {
    return {
        type: "INCREMENT",
        payload: id
    }
}

export const DECREMENT = (id) => {
    return {
        type: "DECREMENT",
        payload: id
    }
}