import React from 'react'
import banner from '/banner3.png'

function Banner() {
    return (
        <>
            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 gap-x-10'>
                <div className=' md:w-1/2 w-full md:mt-32 mt-12 order-2 md:order-1'>
                    <div className=' space-y-12'>
                        <h1 className=' text-4xl font-bold'>Step into a World of Wonder and Words with <span className=' text-lime-600'>BookVerse:</span> Your Gateway to Boundless Stories</h1>
                        <p className=' text-xl'> Stay up-to-date with the latest releases and literary trends. Our passionate team is dedicated to bringing you the most compelling stories and voices from around the globe. Lose yourself in the pages of a new adventure and let your imagination soar.</p>

                        <label className="input input-bordered flex items-center gap-2 bg-amber-100 dark:bg-slate-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>

                    </div>
                    <button className="btn bg-lime-500 text-white mt-6">Submit</button>

                </div>
                <div className=' md:mt-24 mt-12 order-1 md:w-1/2 w-full'>
                    <img src={banner} className=' ' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner