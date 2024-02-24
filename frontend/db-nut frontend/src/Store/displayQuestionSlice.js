import {createAsyncThunk,createSlice } from '@reduxjs/toolkit'


export const getQuestionAsync = createAsyncThunk('getQuestion',async(requestDate)=>{
  const {url} = requestDate
  try{
    const resp = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
          authorization:localStorage.getItem('doubtNutToken')
      }
    })
    if (!resp.ok) {
      const errorData = await resp.json();
      throw new Error(errorData.message);
    }
        const responseData = await resp.json();
        if (responseData.success) {
            console.log(responseData)
            return responseData;
        } else {
            throw new Error(responseData.message);
        }
  }catch(err){
      throw new Error(err.message); 
  }
})


const initialState = {
  question:{},
  errored:false,
  isLoading:false,
  status:"still"
}

export const displayQuestionSlice = createSlice({
  name:"displayQuestion",
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(getQuestionAsync.rejected,(state,action)=>{
      state.errored = true;
      state.isLoading=false;
      state.status = "error"
    })
    builder.addCase(getQuestionAsync.pending,(state,action)=>{
      state.isLoading = true
      state.errored=false
      state.status = "info"
    })
    builder.addCase(getQuestionAsync.fulfilled,(state,action)=>{
      state.errored=false
      state.isLoading=false
      state.status = "success"
      console.log("actn",action.payload)
      state.question = action.payload
    })
  }
})



export const questionStatus = (state)=>state.question.status
export const questionLoading  = (state)=>state.question.isLoading
export const questionObj = (state)=>state.question.question

export default displayQuestionSlice.reducer;