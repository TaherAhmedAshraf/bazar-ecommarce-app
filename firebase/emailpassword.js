import { firebase } from "./Firebase";
import mongo from '../lib/mongo'

function signup({ email, password, fullName }) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
    firebase.auth()
      .currentUser
      .updateProfile({ displayName: fullName })
      .then((res) => console.log(res))
      .catch((err) => console.log(er.message))
  }).catch((error) => console.log(error.message))
}

function login({ email, password }) {
  firebase.auth().signInWithEmailAndPassword(email, password).then((res) => console.log(res)).catch((err) => console.log(err.message))
}

export { signup, login };
