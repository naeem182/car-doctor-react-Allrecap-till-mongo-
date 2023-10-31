import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    //logout
    const logout = () => {
        setloding(true)
        signOut(auth)
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         const userEmail = currentUser?.email || user?.email;
    //         const loggedUser = { email: userEmail };
    //         setUser(currentUser);
    //         console.log('current user', currentUser);
    //         setLoading(false);
    //         // if user exists then issue a token
    //         if (currentUser) {
    //             axios.post('https://car-doctor-server-topaz-one.vercel.app/jwt', loggedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log('token response', res.data);
    //                 })
    //         }
    //         else {
    //             axios.post('https://car-doctor-server-topaz-one.vercel.app/logout', loggedUser, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         }
    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])


    const authinfo = {
        user,
        loading,
        createuser,
        signin,
        logout


    }
    return (
        <Authcontex.Provider value={authinfo}>
            {children}
        </Authcontex.Provider>
    )
}

export default Authprovider
