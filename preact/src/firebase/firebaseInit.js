import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'
import firebaseConfig from './firebaseConfig.json'

export default function firebaseInit() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}