import React, { useState , useEffect } from 'react';
import logo from "../images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/authPageSide.png";
import { api_base_url } from '../helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The best error message is the one that never shows up.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency."
];

const Login = () => {
  
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userId", data.userId);
          toast.success("Login successful! Redirecting...");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error(data.message);
        }
      })
      .catch(() => {
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
          <div className='flex'>
            <a className="text-5xl pl-5 cursor-pointer justify-center ">Code<span className='text-6xl text-green-500 uppercase'>x</span></a>
          </div>
          <form onSubmit={submitForm} className='w-full mt-[60px]' action="">

            <div className="inputBox">
              <input
                required
                onChange={(e) => { setEmail(e.target.value); }}
                value={email}
                type="email"
                placeholder='Email'
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => { setPwd(e.target.value); }}
                value={pwd}
                type="password"
                placeholder='Password'
              />
            </div>

            <p className='text-[gray]'>Don't have an account <Link to="/signUp" className='text-[#00AEEF]'>Sign Up</Link></p>

            <button className="bg-green-500 hover:bg-green-600 rounded-md w-full mt-[20px] h-9 text-lg">Login</button>
          </form>
        </div>
        <div className="right w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Inspirational Quotes</h2>
          <p className="text-lg italic text-gray-300 text-center">
            "{quotes[currentQuoteIndex]}"
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
