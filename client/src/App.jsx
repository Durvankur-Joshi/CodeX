import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
