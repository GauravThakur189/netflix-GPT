import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.language)
//   if(!langKey) return null;
  return (
    <div className='pt-[10%] flex justify-center ' >
    <form className=' w-1/2  '>
        <input className='p-2 m-2 w-3/5'  type="text" placeholder={lang[langKey]?.gptSearchPlaceholder}/>
        <button className='py-2 px-4 w-36 m-2  bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar