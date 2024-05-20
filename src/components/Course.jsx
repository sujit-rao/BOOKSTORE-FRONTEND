import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import axios from 'axios'

import {Link} from 'react-router-dom'

function Course() {

  const[book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async() => {
      try {
        
      const res = await axios.get("https://bookstore-backend-kohl.vercel.app/book")
      console.log(res)
        setBook(res.data);
      } catch (error) {
        console.log("error in course.jsx in frontend, the boook,setbook functioon",error)
      }
    }
    getBook();
  },[])
    
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 pt-1'>
        <div className=' mt-28 items-center justify-center text-center'>
            <h1 className=' text-2xl font-semibold md:text-4xl'>Welcome to<span className=' text-lime-600'> BookVerse!</span>  We're excited to have you join us </h1>
            <p className=' mt-12'>
            Welcome to the Course Section: Here, amidst a rich tapestry of learning, you'll find boundless opportunities to expand your mind and skills. Embark on a journey of discovery, explore diverse subjects, and unleash your potential. Let each course be a stepping stone toward your personal and professional growth. Dive in!</p>
<Link to={"/"}>
<button className=' bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-700 duration-300 mt-6'>Back</button>
</Link>
           
        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
             book.map((item) => (
                <Cards key = {item.id} item = {item} />
             ))
            }
        </div>
        

    </div>
    </>
  )
}

export default Course