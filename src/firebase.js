import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
 } from 'firebase/auth'

 const firebaseConfig = {
    apiKey: "AIzaSyDAhvGcmiTh6rorFd-yMAqiY7LqE-BjgNY",
    authDomain: "tariksefa-34193.firebaseapp.com",
    projectId: "tariksefa-34193",
    storageBucket: "tariksefa-34193.appspot.com",
    messagingSenderId: "221196477925",
    appId: "1:221196477925:web:1a863841513c9e5f847b0c",
    measurementId: "G-86BM6PFNLM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

async function register(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return true
    } catch (error) {
        return false
    }
}

async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return true
    } catch (error) {
        return false
    }
}

export { register, login }