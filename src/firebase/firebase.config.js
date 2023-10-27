// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize your Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Get the authentication module of Firebase
const auth = getAuth(app);

// Export the auth object for use in your application
export default auth;
