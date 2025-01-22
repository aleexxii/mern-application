import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormErrors, clearFormErrors } from "../redux/errorSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

const FormError: React.FC<{ error: string | null }> = ({ error }) => {
  if (!error) return null;
  return <p className="text-red-500 text-sm mb-4">{error}</p>;
};

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { global, emailError, passwordError } = useSelector(
    (state: RootState) =>
      state.errors || { global: null, emailError: null, passwordError: null }
  );
  const dispatch = useDispatch();

  const validateForm = () => {
    let isValid = true;

    dispatch(clearFormErrors());

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      dispatch(
        setFormErrors({ emailError: "Please enter a valid email address." })
      );
      isValid = false;
    }

    // Password validation (example)
    if (password.length < 6) {
      dispatch(
        setFormErrors({
          passwordError: "Password should be at least 6 characters long.",
        })
      );
      isValid = false;
    }

    return isValid;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error) {
          dispatch(setFormErrors({ global: data.error }));
        }
      }else{
        alert('success')
        dispatch(clearFormErrors());
        navigate("/login");
      }

    } catch (error) {
      if (error instanceof Error)
        dispatch(
          setFormErrors({ global: "Network Error. Please try again later." })
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Create an Account
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FormError error={emailError} />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FormError error={passwordError} />
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out mb-4"
            >
              Sign Up
            </button>
            <FormError error={global} />
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
