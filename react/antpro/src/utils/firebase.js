import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyDnJUzQlbuO18slOnXdsnc6OoKnx1HPqpE",
  authDomain: "fir-note-eb819.firebaseapp.com",
  projectId: "fir-note-eb819",
  storageBucket: "fir-note-eb819.appspot.com",
  messagingSenderId: "874665797371",
  appId: "1:874665797371:web:86b00f8c5203cc5869725e",
  measurementId: "G-KFBM14G240"
};

// const firebaseApp=initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

