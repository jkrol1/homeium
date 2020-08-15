import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import productData from './productData';

const config = {
  apiKey: 'AIzaSyCwShblNFQ3IV-2YhEdI3b4B6kE5wOG7oE',
  authDomain: 'homeium.firebaseapp.com',
  databaseURL: 'https://homeium.firebaseio.com',
  projectId: 'homeium',
  storageBucket: 'homeium.appspot.com',
  messagingSenderId: '471960765748',
  appId: '1:471960765748:web:35d66329d4a721e06c1161',
  measurementId: 'G-EL81L3BV6C'
}

// Initialize firestore

firebase.initializeApp(config);

const db = firebase.firestore();

export const insertItemsToFirestore = (productData) => {

  const batch = db.batch();
  for (const category in productData) {
    let docRef = db.collection('products').doc(`${category}`);
    batch.set(docRef, productData[category]);
  }

  batch.commit()
    .then(function () {
      console.log('Document successfully written!');
    })
    .catch(function (error) {
      console.error('Error while writing document: ', error);
    });
};

//insertItemsToFirestore(productData);

export const firestoreFetch = (path) => (db.collection(path).get());

export const transformProductData = (response) => {
  const products = {};
  response.docs.forEach(item => {
    products[item.id] = item.data();
  });
  return products;
};

export const getUserProfile = async (userAuth, additionalData) => {

  // Return if user provided uncorrect credentials

  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // Create a user profile document if it has not already been created

  if (!snapshot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error during user creation', error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Add option to sign in with google popup

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();

export default db;
