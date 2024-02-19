import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading : false
}


export const LoaderSlice = createSlice({
  name:'Loader',
  initialState,
  reducers :{
    startLoader : (state)=>{

        state.isLoading =true
    },
    stopLoader  : (state)=>{
      state.isLoading = false
    }
  }
})

export  const {startLoader,stopLoader} = LoaderSlice.actions;
export default LoaderSlice.reducer
