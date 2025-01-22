import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";



interface PrivateRouteProps {
    role : string;
    children : ReactNode
}

const PrivateRoute : React.FC<PrivateRouteProps> = ({role , children}) => {

    const {isAuthenticated, role : userRole} = useSelector((state : RootState) => state.auth)
console.log('role >> ', role,userRole);
    if(!isAuthenticated){
        return <Navigate to='/login' />
    }

    if(userRole !== role){
        return <Navigate to='/unautorized' />
    }

    return <>
    {children}
    </>
}

export default PrivateRoute