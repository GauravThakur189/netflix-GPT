import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchGPT } from '../utils/GptSlice';
import { SUPPORT_LANGUAGE } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
   const showSearchGpt = useSelector((store)=> store.gpt.searchGptpage);
  
   const goToGptPage = ()=>{
      dispatch(addSearchGPT());
   }

   const handleLanguageChange = (e)=>{
     dispatch(changeLanguage(e.target.value));
    //  console.log( dispatch(changeLanguage(e.target.value)));
   }

  return (
    <div className='absolute w-screen px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
        <div className='flex p-2'>
       { showSearchGpt && <select className='p-2 m-2 bg-gray-800 text-white' 
        onChange={handleLanguageChange}
        >
          {SUPPORT_LANGUAGE.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className='  px-4 py-2 bg-red-700 text-white rounded-lg ' 
        onClick={goToGptPage}
        >{showSearchGpt ? "Home Page" :"GPT Serach"}</button>
        </div>
       
    </div>
  )
}

export default Header