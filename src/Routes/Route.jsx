import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

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
        ]
    },
]);


export default router;