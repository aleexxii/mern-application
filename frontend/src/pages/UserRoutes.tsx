import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";


const UserRoutes : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    )
}

export default UserRoutes