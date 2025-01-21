import axios from '../utils/api'
import { useDispatch, UseDispatch } from 'react-redux'
import { loginSuccess } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () =>{
        try{
            const response = await axios.post('/auth/login', {email, password})
            dispatch(loginSuccess(response.data))
            navigate(response.data.redirectUrl)
        }catch (error) {
            console.log('Login failed', error);
        }
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        className="p-2 border border-gray-300 rounded mb-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="p-2 border border-gray-300 rounded mb-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage