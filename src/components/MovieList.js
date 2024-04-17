import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({title, movies}) => {
  // if(movies.length===null) return;
   console.log("check movies"+movies)
  return (
    <div className='px-6'>
    <h1 className='text-2xl p-4 text-white'>{title} </h1>
        <div className='flex overflow-x-scroll'>
            
            <div className='flex'>
            { 
              movies.map((movie)=> <MovieCart key={movie.id} posterPath = {movie.poster_path} />)}
                  
            </div>
        </div>
    </div>
  )
}

export default MovieList