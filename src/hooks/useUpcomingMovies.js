import {useDispatch} from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import {  addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
  const getNowPlayingMovies = async ()=>{
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)

      const json = await data.json();
      // console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log("nhi hua fetch   " + error);
    }
  
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useUpcomingMovies;