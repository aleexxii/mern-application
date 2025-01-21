import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import LoginPage from "./pages/LoginPage"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminDashboard from "./pages/AdminDashboard"
import UserRoutes from "./pages/UserRoutes"


const App : React.FC = () => {
  const {userRole} = useSelector((state : any) => state.auth)
    return(
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
          path="/"
          element={
            <ProtectedRoute>
              {userRole == 'admin' ? <AdminDashboard /> : <UserRoutes />}
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    )
}

export default App
