import { createContext, useState } from "react"

export const Authcontex = createContext(null)

const Authprovider = ({ children }) => {
    const [user, setuser] = useState();
    const [loading, setloding] = useState(true);


    const userinfo = {
        user,
        loading,

    }
    return (
        <Authcontex.Provider>
            {children}
        </Authcontex.Provider>
    )
}

export default Authprovider
