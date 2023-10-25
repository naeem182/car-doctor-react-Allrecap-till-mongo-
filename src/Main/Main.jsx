import { Outlet } from "react-router-dom"
import Navbar from "../Shared_Pages/Navbar/Navbar"
import Footer from "../Shared_Pages/Footer/Footer"


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main
