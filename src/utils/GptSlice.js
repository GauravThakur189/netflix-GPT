import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        searchGptpage:false,
        movieNames:null,
        movieResults:null

    },

    reducers:{
        addSearchGPT:(state)=>{
          state.searchGptpage = !state.searchGptpage;
        },
        addGptMoviesResult:(state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults= movieResults;
        }
    }
})

export const {addSearchGPT ,addGptMoviesResult}=gptSlice.actions;
export default gptSlice.reducer;