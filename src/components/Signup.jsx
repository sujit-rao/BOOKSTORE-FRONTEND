import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login.jsx'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }

        await axios
            .post("https://bookstore-backend-njxqqu5vb-sujit-raos-projects.vercel.app/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup Successful")
                }
                localStorage.setItem('Users', JSON.stringify(res.data.user))
                window.location.reload();
            }).catch((err) => {

                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message)
                }

            })

    }



    return (
        <>
            <div>
                <div className="flex h-screen items-center justify-center">
                    <div className="modal-box bg-amber-100 dark:bg-slate-800">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>

                            {/* Name */}
                            <div className=' mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your name'
                                    className=' w-80 px-3 border rounded-md outline-none '

                                    {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span className=' text-red-500'>This field is required</span>}
                            </div>

                            {/* Email */}
                            <div className=' mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your email'
                                    className=' w-80 px-3 border rounded-md outline-none py-1 '
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className=' text-red-500'>This field is required</span>}
                            </div>

                            {/* Password */}

                            <div className=' mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password"
                                    placeholder='Enter your password'
                                    className=' w-80 px-3 border rounded-md outline-none '
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className=' text-red-500'>This field is required</span>}
                            </div>

                            {/* Button */}

                            <div className=' flex justify-between  mt-4'>
                                <button className=' bg-lime-500 text-white rounded-md px-3 py-2 hover:bg-lime-700 duration-200 cursor-pointer'>Signup</button>


                               <Link to={"/"}> <span className=' px-3 py-2'>Have account?{" "} <button className=' text-blue-500 underline cursor-pointer hover:text-blue-600'>Signin</button>{" "}
                                   
                                </span></Link>

                            </div>



                        </form>
                        {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup