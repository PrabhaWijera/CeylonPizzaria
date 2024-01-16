// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDADvQQdp0ovvHZEWnAIezRo__lYfhRpjc",
    authDomain: "authentication-9354d.firebaseapp.com",
    projectId: "authentication-9354d",
    storageBucket: "authentication-9354d.appspot.com",
    messagingSenderId: "754422990067",
    appId: "1:754422990067:web:6b3b148cab2773e6082386",
    measurementId: "G-27PY2CLF3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


// mutiple times in project

// export const signInWithGoogle=()=> signInWithPopup(auth, provider);



// this use one time project
export const signInWithGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {
        console.log(result)

        const name = result.user.displayName !== null ? result.user.displayName : "Default Name";
        const email = result.user.email !== null ? result.user.email : "Default Email";
        const photo = result.user.photoURL !== null ? result.user.photoURL : "Default Photo URL";


        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('photo', photo);

        console.log(name, email, photo)

    }).catch((error) => {
        alert(error.message)
    })
};