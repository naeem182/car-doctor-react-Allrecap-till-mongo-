import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginimg from '../../src/assets/images/login/login.svg'
import { useContext } from 'react'
import { Authcontex } from '../Provider/Authprovider'
import axios from 'axios';

const Login = () => {
    const { signin } = useContext(Authcontex)
    const navigate = useNavigate()
    const location = useLocation()
    const handlelogin = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //signin
        signin(email, password)
            .then((result) => {
                // Signed in 
                const loggeduser = result.user;

                const user = { email }
                // get access token
                axios.post('http://localhost:5000/jwt', user)
                    .then(res => {
                        console.log(res.data)
                        // if (res.data.success) {
                        //     navigate(location?.state ? location?.state : '/service')
                        // }
                    })

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                    <h1 className="text-5xl font-bold text-center">Login </h1>
                    <form onSubmit={handlelogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className=' btn bg-orange-600 text-white hover:bg-slate-500' type="submit" value="login" />
                        </div>
                    </form>
                    <p className='py-4 text-center'>New to Car-doctors<Link className='text-orange-500 font bold' to='/signup'    >Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
