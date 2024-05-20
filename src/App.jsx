import { useState } from 'react'
import Home from './home/Home'
import {Toaster} from "react-hot-toast"

import { Route, Routes, Navigate } from 'react-router-dom'

import Courses from './Courses/Courses'
import Signup from './components/Signup'
import ContactUs from './Contact/ContactUs'
import { useAuth } from './context/AuthProvider'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  

  return (
    <>
      <div className=' dark:bg-slate-900 dark:text-white'>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser? <Courses /> : <Navigate to= "/signup"/> } />
          <Route path="/signup" element={<Signup />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer/>
       
        <Toaster/>
      </div>
    </>
  )
}

export default App
