import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { useContext } from "react";
import { Authcontex } from "../../Provider/Authprovider";

const Navbar = () => {
    const { user, logout } = useContext(Authcontex);
    const handlelogout = () => {
        logout(); // Assuming that logout is a synchronous function
        console.log('user logged out successfully');
    };

    const NavLinks = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Services</Link></li>
            {user?.email ?
                <>
                    <li><Link to='/booking'>My Cart</Link></li>
                    <li><button onClick={handlelogout}>Log out</button></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>
    );

    return (
        <div className="navbar bg-base-100 h-14 mb-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className=" w-24 h-14" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
}

export default Navbar;
