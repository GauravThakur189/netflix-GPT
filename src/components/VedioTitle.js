import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='p-2 m-2 font-bold text-3xl'>{title}</h1>
        <p className='p-2 text-lg  w-1/4 '>{overview}</p>
        <button className='py-2 px-5 m-1 bg-white text-black rounded-lg hover:bg-opacity-70'>▶️ Play</button>
        <button className='py-2 px-5 m-1 bg-gray-500 text-white rounded-lg'>more info!</button>
    </div>
  )
}

export default VedioTitle