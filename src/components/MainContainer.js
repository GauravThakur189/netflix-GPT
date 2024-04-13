import React from 'react'
import VideoBackground from './VideoBackground'
import VedioTitle from './VedioTitle'
import { useSelector } from 'react-redux'
import { nowPlayingMovies} from '../utils/movieSlice'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)

    if(!movies) return; 

    const mainMovie = movies[0];  
    console.log(mainMovie);
    const {original_title,overview ,id} = mainMovie;
  return (
    <div>
   

     <VedioTitle title = {original_title} overview = {overview}/>
        <VideoBackground id={id}/>
        
    </div>
  )
}

export default MainContainer