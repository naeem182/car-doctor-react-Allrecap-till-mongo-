import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";

export const Authcontex = createContext(null)

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloding] = useState(true);
    let unsubscribe = null; // Define unsubscribe here

    //createuser with email
    const createuser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signin
    const signin = (email, password) => {
        setloding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //currentuser
    useEffect(() => {
        unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            setloding(false); // Change this to set loading to false
            console.log("current user", currentuser)
        });
        return () => { unsubscribe() }
    }, [])

    const authinfo = {
        user,
        loading,
        createuser,
        signin,


    }
    return (
        <Authcontex.Provider value={authinfo}>
            {children}
        </Authcontex.Provider>
    )
}

export default Authprovider
