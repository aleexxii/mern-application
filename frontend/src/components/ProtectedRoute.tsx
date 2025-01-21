import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



interface ProtectedRouteProp {
    children : React.ReactElement;
    role? : string
}

const ProtectedRoute : React.FC<ProtectedRouteProp> = ({children, role}) => {
    const { isAuthenticated, userRole} = useSelector((state : any) => state.auth)

    if(!isAuthenticated){
        return <Navigate to='/login' />
    }

    if(role && userRole !== role){
        return <Navigate to='/' />
    }

    return children
}

export default ProtectedRoute