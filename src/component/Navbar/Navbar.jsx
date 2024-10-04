import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const menu = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/'}>About Us</NavLink></li>
        <li><NavLink to={'/'}>Contact Us</NavLink></li>
        <li><NavLink to={'/orders'}>Orders</NavLink></li>
        
    </>
    const { user, signOutUser } = useContext(AuthContext);
    const [isUser, setUser] = useState(null);
    useEffect(() => {
        setUser(user);
    }, [user])


    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                alert('Sign out successfully!')
                if (isUser) {
                    setUser(null)
                }
            })
            .catch(err => {
                alert(err.message)

            })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="gap-5 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}

                            {isUser && <li><button onClick={handleSignOutUser} className="btn lg:flex w-[60px] text-nowrap">Sign Out</button></li>}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Firebase Auth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-5 menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    {
                        isUser && <h2 className="">{isUser?.displayName}</h2>
                    }

                    {
                        isUser ? <button onClick={handleSignOutUser} className="btn hidden lg:flex w-[60px] text-nowrap">Sign Out</button> : <><Link to={'/signin'}><button className="btn w-[60px] text-nowrap">Sign In</button></Link>
                            <Link to={'/signup'}><button className="btn w-[60px] text-nowrap">Sign Up</button></Link></>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;