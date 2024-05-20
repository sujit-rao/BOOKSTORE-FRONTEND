import React from 'react'

import Navbar from './Navbar'

function Contact() {
    return (
        <>
        <Navbar/>

            <div className=' mt-16 pt-16 justify-center p-12 min-h-screen items-center'>
                <div className=' p-8 md:px-24 space-y-6 '>
                    <h1 className=' underline'>Contact Us</h1>
                    <div className=' space-y-1'>
                        <h1 className=' font-semibold text-md'>Name*</h1>
                        <label className="input input-bordered flex items-center gap-2 w-3/5 bg-amber-100 dark:bg-slate-800 ">
                            
                            <input type="text" className="grow" placeholder="" />
                        </label>
                    </div>
                    <div className=' space-y-1'>
                        <h1 className=' font-semibold'>Email*</h1>
                        <label className="input input-bordered flex items-center gap-2 w-4/5 bg-amber-100 dark:bg-slate-800 ">
                            
                            <input type="text" className="grow" placeholder="" />
                        </label>
                    </div>
                    <div className=' space-y-1'>
                        <h1 className=' font-semibold'>What can we help you with</h1>
                        <textarea className="textarea textarea-bordered w-full bg-amber-100 dark:bg-slate-800 " placeholder=""></textarea>
                    </div>
                    <button className="btn bg-lime-500 text-white">Submit</button>
                </div>


            </div>
        </>
    )
}

export default Contact