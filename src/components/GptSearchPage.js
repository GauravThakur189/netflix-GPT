import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearchPage = () => {
    
  return (
    <div>
    <div className='absolute -z-10'>
     <img className='w-screen h-screen ' src= {BG_URL} alt='imahess' />
     </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage