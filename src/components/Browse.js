import React from 'react'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';
const Browse = () => {
  const searchGptpage = useSelector((store)=>store.gpt.searchGptpage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    
    <div>
    <Header/>
    {searchGptpage ? <GptSearchPage/> : <>
    <MainContainer/>
    <SecondaryContainer/>
    </>}
    
   
    </div>
  )
}
export default Browse