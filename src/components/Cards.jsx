import React from 'react'

function Cards({item}) {
    
    return (
        <>
        <div className=' mt-4'>
        <div className="card w-92 p-3 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border m-2">
                <figure className=' h-64'><img src={item.image} alt="Book Image" /></figure>
                <div className="card-body">
                    <h3 className="card-title">
                        <div className=' '>{item.name}</div>
                        
                        <div className="badge bg-lime-500 text-white font-normal">{item.category}</div>
                    </h3>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="badge badge-outline hover:text-white hover:bg-lime-500 duration-200 transition-all cursor-pointer px-2 py-1 rounded-full  hover:border-none">Buy now</div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Cards