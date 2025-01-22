import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Homepage from "./pages/Homepage"

const App : React.FC = () => {

    return(
      <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
      
      </>
    )
}

export default App
