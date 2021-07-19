import firebase from 'firebase'
import 'firebase/database'

const db = firebase.database()

export default function() {
    return db
}