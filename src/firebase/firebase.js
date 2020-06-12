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
            console.error('Error writing document: ', error);
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

export default db;



