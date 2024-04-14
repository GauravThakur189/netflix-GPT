import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearchGPT } from '../utils/GptSlice';

const Header = () => {
  const dispatch = useDispatch();
  
   const goToGptPage = ()=>{
      dispatch(addSearchGPT());
   }

  return (
    <div className='absolute w-screen px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
        <div className='flex p-2'>
        <button className='  px-4 py-2 bg-red-700 text-white rounded-lg ' 
        onClick={goToGptPage}
        >GPT Serach</button>
        </div>
       
    </div>
  )
}

export default Header