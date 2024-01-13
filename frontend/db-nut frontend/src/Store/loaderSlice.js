import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading : false
}


export const LoaderSlice = createSlice({
  name:'Loader',
  initialState,
  reducers :{
    toggleLoader : (state)=>{
        state.isLoading = !state.isLoading
    }
  }
})

export  const {toggleLoader} = LoaderSlice.actions;
export default LoaderSlice.reducer
