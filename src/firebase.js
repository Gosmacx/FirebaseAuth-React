import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
 } from 'firebase/auth'

const firebaseConfig = {
    // ... Configure your firebase here
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