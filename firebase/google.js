import { firebase } from "../firebase/Firebase"

const signInWithGoogle = () => {
    const auth = firebase.auth()
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then(async (data) => {
        console.log(data)
    })
}

export { signInWithGoogle }