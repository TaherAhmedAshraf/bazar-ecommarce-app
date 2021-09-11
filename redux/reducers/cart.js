let initialState = []

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TO_CART": {
            const id = action.payload._id

            if (check(state, id)) {

                let updatedCart =
                    state.map((item) => {
                        if (item._id === id) {
                            return { _id: id, qty: item.qty + 1, }
                        }
                        return item
                    })

                state = [...updatedCart];
                return state

            } else {
                state = [...state, action.payload];
                return state
            }
        }

        case "INCREMENT": {
            const id = action.payload
            let updatedCart =
                state.map((item) => {
                    if (item._id === id) {
                        return { _id: id, qty: item.qty + 1, }
                    }
                    return item
                })

            state = [...updatedCart];
            console.log(state)
            return state
        }

        case "DECREMENT": {
            const id = action.payload
            let updatedCart =
                state.map((item) => {
                    if (item._id === id && item.qty !== 0) {
                        return { _id: id, qty: item.qty - 1, }
                    }
                    return item
                })

            state = [...updatedCart];
            state = state.filter((item) => item.qty !== 0)
            console.log(state)
            return state
        }


        default: {
            return state
        }
    }
}

function check(list, id) {
    for (let i = 0; i < list.length; i++) {

        if (list[i]["_id"] === id) {
            return true;
        }

    }
    return false
}
