import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        searchGptpage:false
    },

    reducers:{
        addSearchGPT:(state)=>{
          state.searchGptpage = !state.searchGptpage;
        }
    }
})

export const {addSearchGPT}=gptSlice.actions;
export default gptSlice.reducer;