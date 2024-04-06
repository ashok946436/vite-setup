import React from 'react'

function Card({username}){
    return(
        <>
        <div className='bg-green-400 mt-5 p-4 w-1/1'>
            <img src="https://vitejs.dev/logo.svg" alt="" />
            <h1 className='bg-red-200'>{username}</h1>
        </div>
        </>
    )
}
export default Card