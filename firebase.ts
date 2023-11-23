import {getApp, getApps, initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getFunctions} from 'firebase/functions'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA9rHBYJz1k3iO7pUI8DlheIklTsdkPV6A',
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export {auth, db, functions}
