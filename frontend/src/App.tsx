import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/HomePage";
import PrivateRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/profilePage";
import UsersPage from "./pages/UserPage";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* User */}
          <Route
            path="/home"
            element={
              <PrivateRoute role="user">
                <Homepage />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute role="user">
                <ProfilePage />
              </PrivateRoute>
            }
          />

          {/* admin */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <PrivateRoute role="admin">
                <UsersPage />
              </PrivateRoute>
            }
            />
        </Routes>
      </Router>
    </>
  );
};

export default App;
