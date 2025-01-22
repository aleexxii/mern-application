import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { loginFailed, loginSuccess, startLoading } from '../redux/authSlice';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { loading, errorMessage } = useSelector((state : RootState) => state.auth)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!email || !password){
      alert("email and password are required")
      return
    }
    
    try {

      dispatch(startLoading())

      const response = await fetch('http://localhost:4000/api/auth/login',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({email, password})
      })

      const data = await response.json()

      if(response.ok){
        dispatch(loginSuccess({token : data.token, role : data.role}))
        navigate('/home')
      }else{
        dispatch(loginFailed(data.error || 'Invalid credentials'))
      }

    } catch (error) {
      if(error instanceof Error)
      dispatch(loginFailed(`Network Error please try again, ${error.message}`))
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out mb-4"
            >
              {loading ? "logging In..." : 'Login'}
            </button>
            {errorMessage && <p className='text-red-700 text-sm'>{errorMessage}</p>}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out mb-4"
            >
              Continue with Google
            </button>
            <a href="/signup" className="text-blue-500 hover:text-blue-700">
              Don't have an account? Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
