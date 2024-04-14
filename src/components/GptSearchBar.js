import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center ' >
    <form className=' w-1/2  '>
        <input className='p-2 m-2 w-3/5'  type="text" placeholder="What would you like to watch today???"/>
        <button className='py-2 px-4 w-36 m-2 w-20 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar