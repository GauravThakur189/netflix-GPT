import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector(state => state.gpt);
  const {movieNames,movieResults} = gpt;
  return (
    <div className='p-4 m-4 bg-black text-white opacity-80'>
    {movieNames.map((movieName,index)=> <MovieList key={movieName} title={movieNames} movies={movieResults[index]} />)}  
    </div>
  )
}

export default GptMovieSuggestions