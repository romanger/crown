import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCHRdqNmLfT0S1_DKX1hU43twHXAe8Cq6U',
    authDomain: 'crwn-9f0f2.firebaseapp.com',
    projectId: 'crwn-9f0f2',
    storageBucket: 'crwn-9f0f2.appspot.com',
    messagingSenderId: '480165555829',
    appId: '1:480165555829:web:05378bfb4b24cde0ded23c',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider)

//Connecting to database in FireStore
export const db = getFirestore()

//Seeding method
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('Done')
}

export const getCollectionAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')

    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    console.log(querySnapshot.docs)

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()

        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}

//Authenticating user function
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return
    //Creating a reference of the document in user collection with uniq ID from Google Auth
    const userDocRef = doc(db, 'users', userAuth.uid)

    //Creating a snapshot of the document to check if this document exist in the database by using the .exists method
    const userSnapshot = await getDoc(userDocRef)

    // if user not exist adding new user to the 'users' collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log(error)
        }
    }

    //if user exists just returning the document
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback)
