import firebase from "firebase/compat/app";
// Required for side-effects
// import "firebase/firestore";

// import firebase from "firebase/app";
import 'firebase/compat/firestore'
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCyBpm8Mt38vZoJuLlTwJZ1E5HyQ3UCUXQ",
    authDomain: "usc-hack-2024.firebaseapp.com",
    databaseURL: "https://usc-hack-2024-default-rtdb.firebaseio.com",
    projectId: "usc-hack-2024",
    storageBucket: "usc-hack-2024.appspot.com",
    messagingSenderId: "727825775169",
    appId: "1:727825775169:web:1fb82321cb75983a4324c0",
    measurementId: "G-XH4995YCG3"
  };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
 

///// get information from db

var citiesRef = db.collection("tutors");
// curse_needed.value()

// outputting tutors currently teaching user-inputted course
citiesRef.where("courses", 'array-contains-any', ["CSCI 104"]).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        // let A = doc.data();
    });
})




console.log("Document written with ID: ", docRef.id);

