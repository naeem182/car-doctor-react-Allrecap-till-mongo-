import loginimg from '../../src/assets/images/login/login.svg'

const Login = () => {
    const handlelogin = e => {
        e.preventdefault()

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
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className=' btn bg-orange-600 text-white hover:bg-slate-500' type="submit" value="login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
