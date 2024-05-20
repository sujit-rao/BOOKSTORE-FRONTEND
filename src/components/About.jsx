import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen pt-16 ">
                <div className=" space-y-4 pt-2 p-20"> 
                <h1 className=' text-3xl underline pt-8'>About Us</h1>
                    <div className=''>



                        <div className=' py-6 space-y-3 dark:text-white'>
                            <p>At BookVerse, we are passionate about connecting readers with captivating stories from around the world. Our mission is to provide a platform where book lovers can discover new authors, explore diverse genres, and immerse themselves in the joy of reading. With a dedicated team of literature enthusiasts, we curate a collection of carefully selected books to ensure every reader finds their next literary adventure. Join us as we celebrate the power of storytelling and the endless possibilities found within the pages of a book.</p>
                            <p>Founded with a love for literature and a commitment to fostering a vibrant reading community, BookVerse is more than just an online bookstore—it's a haven for bibliophiles, a sanctuary for the imagination, and a hub for literary discovery.</p>

                            <p>Our journey began with a simple belief: that books have the power to inspire, educate, and transform lives. Guided by this principle, we strive to create an inclusive space where readers of all backgrounds can come together to share their passion for storytelling.</p>

                            <p>At BookVerse, we believe in the magic of words and the profound impact they can have on individuals and society as a whole. From classic masterpieces to contemporary bestsellers, we offer a curated selection that reflects the richness and diversity of human experiences.</p>

                            <p>As we continue to grow, our commitment remains unwavering: to be a trusted source of literary excellence, a champion of emerging voices, and a beacon of inspiration for book lovers everywhere. Join us on this journey as we embark on new chapters, discover new worlds, and celebrate the timeless beauty of the written word.</p>

                           <p> Driven by our dedication to excellence, we strive to foster meaningful connections between authors and readers, creating a space where dialogue flourishes and ideas thrive. We believe that books have the power to bridge divides, ignite imaginations, and spark conversations that shape the world we live in.</p>

                           <p>Behind the scenes, our team works tirelessly to ensure that every aspect of your BookVerse experience is exceptional. From meticulously selecting each title to providing personalized recommendations, we are committed to exceeding your expectations and helping you find the perfect book for every occasion.</p>

                           <p>But BookVerse is more than just a bookstore—it's a community. Whether you're a seasoned bookworm or just beginning your literary journey, you'll find a welcoming and supportive environment here. Join us as we celebrate the joy of reading and the boundless possibilities that books offer.</p>

                           <p>Thank you for choosing BookVerse as your literary destination. We look forward to sharing many more chapters with you and continuing to be your trusted partner in all things literary.</p>

                        </div>
                        <div className=' space-x-6 flex'>
                            <a href="https://www.linkedin.com/in/sujit-rao-6b3896242/"><img src="LnkdIcon.webp" className=' h-8 hover:scale-125 duration-300 cursor-pointer ' alt="" /></a>
                            <a href="https://www.instagram.com/sujitt_rao/"><img src="instaIcon.webp" className=' border-white h-8 hover:scale-125 duration-300 cursor-pointer' alt="" /></a>
                            <a href="https://github.com/sujit-rao"><img src="gitIcon.png" className=' rounded-full h-8 hover:scale-125 duration-300 cursor-pointer' alt="" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
