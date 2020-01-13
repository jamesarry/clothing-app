import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHC4sONG0TPNlz7lZD-cJDlrf7Y_CuTaw",
    authDomain: "clothing-db-3159a.firebaseapp.com",
    databaseURL: "https://clothing-db-3159a.firebaseio.com",
    projectId: "clothing-db-3159a",
    storageBucket: "clothing-db-3159a.appspot.com",
    messagingSenderId: "254984255765",
    appId: "1:254984255765:web:2c959855141c8d6e50511c",
    measurementId: "G-VM9KDY08CX"
};


/**
 * store our authenticated users into firebase database
 * If the user object does not exist, returns nothing else query firestore for the user
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
      
    if(!userAuth) return;
   
       const userRef = firestore.doc(`users/${userAuth.uid}`);

       const snapShot = await userRef.get();
       if(!snapShot.exists){
           const { displayName, email } = userAuth;
           
           const createdAt = new Date();

           try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
           }catch(error){
             console.log('error creating user', error.message);
           }
       }

       return userRef;

};

//Initialise firebase and pass in the config
firebase.initializeApp(config);

//Call auth and firestore from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//Trigger the google pop up provide when authentication is being made 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;