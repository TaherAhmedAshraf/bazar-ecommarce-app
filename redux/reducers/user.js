import { useState } from 'react'
import { firebase, useAuthState } from '../../firebase/Firebase'
const auth = firebase.auth()

// Initial Value
const initialState = { displayName: null, email: null, emailVerified: false, phoneNumber: null, photoURL: null, uid: null }


export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case "SET_USER": {
            return state = action.payload;
        }

        default: {
            return state
        }
    }
}
