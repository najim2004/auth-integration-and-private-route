import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
const SignUp = () => {
    const [pShowHied, setPShowHied] = useState(false);
    const { createUser } = useContext(AuthContext)



    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(userCredentials => {
                updateProfile(userCredentials.user, {
                    displayName: name,
                })
                console.log(userCredentials);
            })
            .catch(error => {
                console.log(error.message);
            })
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
    };

    return (
        <div>
            <div className="hero min-h-[calc(100vh-68px)] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="relative form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={pShowHied ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span className="absolute right-3 text-2xl size-8 top-[calc(50%-15px)] flex items-center" onClick={() => setPShowHied(!pShowHied)}>

                                    {pShowHied ? <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg font-bold">Sign Up</button>
                            </div>
                            <p>Already have an account? let's <Link className="text-purple-500 font-semibold" to={'/signin'}>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;