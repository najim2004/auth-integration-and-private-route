import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className=" w-screen h-[calc(100vh-68px)] grid place-items-center">

                <span className="loading size-[80px] text-green-500 loading-infinity loading-lg"></span>

            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/signin'}></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivetRoute;





