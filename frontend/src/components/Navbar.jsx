import React, { useEffect, useState } from 'react'
import logo from "../images/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Avatar from 'react-avatar';
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { api_base_url, toggleClass } from '../helper';
import { IoLogOutSharp } from "react-icons/io5";

const Navbar = ({ isGridLayout, setIsGridLayout }) => {

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    fetch(api_base_url + "/getUserDetails", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId")
      })
    }).then(res => res.json()).then(data => {
      if (data.success) {
        setData(data.user);
      }
      else {
        setError(data.message);
      }
    })
  }, [])
  const changeTheme = () => {
    const Home = document.querySelector(".Home");
    const navbar = document.querySelector(".navbar")
    if (isLightMode) {
      navbar.style.background = "#141414"
      Home.style.background = "#1A1919";
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      navbar.style.background = "#FAF9F6"
      Home.style.background = "#FFFFF0";
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }

  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]"
       theme={isLightMode ? "vs-light" : "vs-dark"} >
      <a className="text-2xl pl-5 cursor-pointer">Code<span className='text-3xl text-green-500 uppercase'>x</span></a>
        <div className="links flex items-center gap-5">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Services</Link>
        </div>
        <div className=' flex right-10 '>

          <button onClick={logout} className=' '><IoLogOutSharp className='h-8 w-8 text-red-600 hover:text-red-700  '/></button>
        
          <Avatar onClick={() => { toggleClass(".dropDownNavbar", "hidden" ) }} name={data ? data.name : ""} size="40" round="50%" className=' cursor-pointer ml-2' />
        </div>

        <div className='dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[150px] h-[160px]'>
          <div className='py-[10px] border-b-[1px] border-b-[#fff] '>
            <h3 className='text-[17px] text-white' style={{ lineHeight: 1 }}>{data ? data.name : ""}</h3>
          </div>
          <i onClick={changeTheme} className='flex items-center gap-2 mt-3 mb-2 cursor-pointer text-white' style={{ fontStyle: "normal" }}><MdLightMode className='text-[20px]' /> Light mode</i>
          <i onClick={() => setIsGridLayout(!isGridLayout)} className='flex text-white items-center gap-2 mt-3 mb-2 cursor-pointer' style={{ fontStyle: "normal" }}><BsGridFill className='text-[20px]' /> {isGridLayout ? "List" : "Grid"} layout</i>
        </div>
      </div>
    </>
  )
}

export default Navbar