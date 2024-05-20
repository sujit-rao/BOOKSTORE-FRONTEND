import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from "react-hot-toast"

function Logout() {
    const [authUser, setAuthUser] = useAuth()

    const handleLogout = async() => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users")
            toast.success("Logout Successful");
            window.location.reload()

            
           

        } catch (error) {
            toast.error("Error" + error)
            setTimeout(() => { }, 1000)
        }
        
    }
    return (
        <div>
            <button className=' px-3 py-2 bg-red-500 hover:bg-red-700 rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
