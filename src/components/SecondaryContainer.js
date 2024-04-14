import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies)
    if(movies.nowPlayingMovies===null) return;
    if(movies.topRatedMovies=== null) return;
    if(movies.upcomingMovies === null) return;
    if(movies.popularMovies === null) return;
  // console.log(movies.nowPlayingMovies);
  return (<div className='bg-black'>
  <div className='-mt-52 pl-12 relative z-20 '>
    <div><MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/></div>
     <div><MovieList title={"Popular"} movies = {movies.popularMovies}/></div>
     <div><MovieList title={"Top Rating"} movies = {movies.topRatedMovies}/></div>
     <div><MovieList title={"Upcoming Movies"} movies = {movies.upcomingMovies}/></div>
     <div><MovieList title={"Horror"} movies = {movies.nowPlayingMovies}/></div>
     </div>
     </div>
  )
}

export default SecondaryContainer