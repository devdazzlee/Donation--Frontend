import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import logo from '../Web_logo-removebg-preview.png'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://donation-backend-gerd.vercel.app/login', {
        email,
        password,
      });
      console.log('User logged in:', response.data.user);
      login(response.data.user);
      navigate('/home');
    } catch (error) {
      alert("Login failed. Check email or password.");
      console.error('Login failed:', error);
    }
  };

  return (
    <div   className="flex justify-center items-center h-screen fontchange">
      <form  style={{"background" :"#87CEEB"}} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <Link  className='flex items-center' to={"/home"} >
  
  <img  className='h-24 mr-2'  src={logo} alt="Education Empower" />
<h1 className='font-bold text-xl' >Education Empower</h1>

     </Link>
      <h2 className="text-2xl text-center font-semibold mb-4">Log In</h2>
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
        <div className="flex items-center justify-between">         
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <Link to={'/signup'} className="text-blue-500 hover:text-blue-800">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
