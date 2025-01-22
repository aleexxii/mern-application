import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Homepage from "./pages/HomePage"
import PrivateRoute from "./components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard"


const App : React.FC = () => {

    return(
      <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          {/* User */}
          <Route path="/home" element={
            <PrivateRoute role="user">
              <Homepage />
            </PrivateRoute>
          } />


          {/* admin */}
          <Route path="/dashboard" element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          } />
          
        </Routes>
      </Router>
      
      </>
    )
}

export default App
