 import {createSlice} from '@reduxjs/toolkit'

 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        nowPlayingTrailer:null
    },
    reducers:{
      addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies = action.payload;
      },
      addPopularMovies:(state,action)=>{
        state.popularMovies = action.payload;
      },
      addTopRated:(state,action)=>{
       state.topRatedMovies = action.payload;
      },
      addUpcomingMovies:(state,action)=>{
        state.upcomingMovies = action.payload
      },
      addTrailerVedios :(state,action)=>{
        state.nowPlayingTrailer = action.payload;
      }
    }
 });

 export const {addNowPlayingMovies,addTrailerVedios,addPopularMovies,addTopRated,addUpcomingMovies}= movieSlice.actions;
 
export default movieSlice.reducer;