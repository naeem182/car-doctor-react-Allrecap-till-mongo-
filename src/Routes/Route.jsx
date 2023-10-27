import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import Services from "../Pages/Services/Services";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/service",
                element: <Services />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/checkout/:id",
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Fetch failed');
                        }
                        return response.json();
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                        return null; // Handle the error as needed
                    })
            },
        ]
    },
]);

export default router;
