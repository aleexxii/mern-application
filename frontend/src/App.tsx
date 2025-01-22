import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

const App : React.FC = () => {

    return(
      <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
      
      </>
    )
}

export default App
