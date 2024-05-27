// Login.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState(''); // Change variable name to email
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email, // Send email instead of username
        password,
      });
      console.log('User logged in:', response.data.user);
      login(response.data.user); // Update authentication state upon successful login
navigate('/home')
    } catch (error) {
      alert("Login failed. Check email or password.");
      console.error('Login failed:', error); // Handle login error
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Input field for email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Input field for password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Sign in button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
            {/* Link to sign up page */}
            <Link to={'/signup'} className='text-blue-500 hover:text-blue-800'>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
