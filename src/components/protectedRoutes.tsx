import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";



const ProtectedRoutes = () => {
    const {isAuthenticated, initializing} = useAuth();

    if(initializing){
        return <p>Loading...</p>
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;

}



export default ProtectedRoutes;