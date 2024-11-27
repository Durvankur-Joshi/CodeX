import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppStore } from '../store/store';
import { apiClient } from '../lib/api-client';
import { LOGIN_ROUTES, SIGNUP_ROUTES } from '../utils/constants.js';

const Auth = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState('signup');
  const { setUserInfo } = useAppStore(); // Use the Zustand's setUserInfo directly
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Toggle form visibility
  const showForm = (form) => {
    setActiveForm(form);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const validateSignin = () => {
    if (!username.length) {
      toast.error("Username is required")
      return false;
    }
    if (!email.length) {
      toast.error('Email is required');
      return false;
    }
    if (!password.length) {
      toast.error('Password is required');
      return false;
    }
    return true;
  };

  // Signup submission handler
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateSignin()) {

      try {

       const response = await apiClient.post(SIGNUP_ROUTES,{username , email , password } ,{withCredentials:true})

       if (response.status === 200) { // assuming signup returns a 201 Created status
        toast.success('Signup successful!');
        navigate("/");
        setUserInfo(response.data.user);
        console.log(response.data.user)
      } else {
        toast.error('Unexpected response. Please try again.');
      }

      } catch (error) {
        console.error('Error during signup:', error);
        toast.error('An error occurred during signup. Please try again.');
      }
    }
  };

  // Validate login form
  const validateLogin = () => {
    if (!email.length) {
      toast.error('Email is required');
      return false;
    }
    if (!password.length) {
      toast.error('Password is required');
      return false;
    }
    return true;
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateLogin()) {
      try {
        // Make the login request with credentials
        const response = await apiClient.post(
          LOGIN_ROUTES,
          { email, password },
          { withCredentials: true }
        );
        

        // Check if the user object exists in the response
        if (response.data && response.data.user && response.data.user.id) {
          toast.success('Login successful!');
          setUserInfo(response.data.user);
          console.log(response.data.user)
          navigate('/'); // Redirect to the home page
        } else {
          toast.error("Login failed: User not found");
        }
      } catch (error) {
        toast.error("Error during login: Invalid credentials");
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />

      <div className="container max-w-5xl flex rounded-2xl shadow-lg overflow-hidden bg-gray-800">
        <div className="w-1/2 p-12 flex flex-col justify-center items-center bg-gray-900">
          <h1 className="text-4xl font-bold text-green-400 mb-4">Welcome to CodeX</h1>
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            Your ultimate coding companion. Unlock the potential of coding with CodeX, a space where creativity meets technology.
          </p>
        </div>

        <div className="w-1/2 p-12 relative">
          <div className="text-3xl font-bold text-green-400 text-center mb-8">CodeX</div>

          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 font-semibold rounded-lg transition-colors ml-4 ${
                activeForm === 'signup' ? 'bg-green-400 text-gray-900' : 'text-gray-400 hover:bg-white/10'
              }`}
              onClick={() => showForm('signup')}
            >
              Signup
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
                activeForm === 'login' ? 'bg-green-400 text-gray-900' : 'text-gray-400 hover:bg-white/10'
              }`}
              onClick={() => showForm('login')}
            >
              Login
            </button>
          </div>

          {activeForm === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <label htmlFor="login-email" className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="login-password" className="block text-sm text-gray-400 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-lg border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition"
              >
                Login
              </button>
            </form>
          )}

          {activeForm === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="relative">
                <label htmlFor="signup-username" className="block text-sm text-gray-400 mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="signup-email" className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Create an email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="signup-password" className="block text-sm text-gray-400 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:border-green-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-lg border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
