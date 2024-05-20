import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import axios from 'axios'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Cards from './Cards.jsx';

function FreeBook() {

    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {

                const res = await axios.get("https://bookstore-backend-njxqqu5vb-sujit-raos-projects.vercel.app/book")
                
                const data = res.data.filter((data) => data.category === "Free")
                setBook(data)
                console.log(data)
            } catch (error) {
                console.log("error in course.jsx in frontend, the boook,setbook functioon", error)
            }
        }
        getBook();
    }, [])
    


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-3 pb-2 space-y-1 mb-6'>
                <div >
                    <h1 className=' font-semibold text-xl'>Free Books</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum consectetur cum libero eum cupiditate.</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook