
import firebase from "firebase";
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyC3vY1xmKoIfwdVPO4MNsBTvptQmqW4A7o",
  authDomain: "badbadger-38824.firebaseapp.com",
  projectId: "badbadger-38824",
  storageBucket: "badbadger-38824.appspot.com",
  messagingSenderId: "648735732813",
  appId: "1:648735732813:web:2d281f0ec36c755c539804"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}