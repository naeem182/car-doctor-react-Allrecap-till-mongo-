import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { Authcontex } from "../Provider/Authprovider";
const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(Authcontex)

    const location = useLocation()
    // console.log(location.pathname)

    if (loading) {
        return <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};


export default PrivateRouter
