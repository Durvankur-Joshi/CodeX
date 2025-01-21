import React, { useState } from 'react';
import logo from "../images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/authPageSide.png";
import { api_base_url } from '../helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          toast.success("Account created successfully! Redirecting...");
          setTimeout(() => {
            navigate("/login");
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
                onChange={(e) => { setUsername(e.target.value); }}
                value={username}
                type="text"
                placeholder='Username'
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => { setName(e.target.value); }}
                value={name}
                type="text"
                placeholder='Name'
              />
            </div>

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

            <p className='text-[gray]'>Already have an account <Link to="/login" className='text-[#00AEEF]'>Login</Link></p>

            <button className="bg-green-500 hover:bg-green-600 rounded-md w-full mt-[20px] h-9 text-lg">Sign Up</button>
          </form>
        </div>
        <div className="right w-[55%]">
          <img className='h-[100vh] w-[100%] object-cover' src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
