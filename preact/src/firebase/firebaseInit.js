import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

export default function() {
    if (!firebase.apps.length) {
        firebase.initializeApp()
    }
}