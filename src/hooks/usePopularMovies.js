import {useDispatch} from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import {  addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';


const usePopularMovies = ()=>{
    const dispatch = useDispatch();
  const getNowPlayingMovies = async ()=>{
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)

      const json = await data.json();
      // console.log(json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log("nhi hua fetch   " + error);
    }
  
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default usePopularMovies;