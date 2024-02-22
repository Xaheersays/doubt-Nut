import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeedAsync = createAsyncThunk('fetchFeedAsync',async(requestData)=>{
  const {url,data} = requestData
  await new Promise((res)=>setTimeout(res,2000))
  try{
    const resp = await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
          authorization:localStorage.getItem('doubtNutToken')
      },
      body: JSON.stringify(data),
    })
    if (!resp.ok) {
      const errorData = await resp.json();
      throw new Error(errorData.message);
    }
        const responseData = await resp.json();
        if (responseData.success) {
            console.log(responseData)
            return responseData.feed;
        } else {
            throw new Error(responseData.message);
        }
  }catch(err){
      throw new Error(err.message); 
  }
})

const initialState = {
  feed:[],
  errored:false,
  isLoading:false,
  status:"still"

}

export const feedSlice = createSlice({
  name:"feed",
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchFeedAsync.rejected,(state,action)=>{
      state.errored = true;
      state.isLoading=false;
      state.status = "error"
    })
    builder.addCase(fetchFeedAsync.pending,(state,action)=>{
      state.isLoading = true
      state.errored=false
      state.status = "info"
    })
    builder.addCase(fetchFeedAsync.fulfilled,(state,action)=>{
      state.errored=false
      state.isLoading=false
      state.status = "success"
      console.log("actn",action.payload)
      state.feed = action.payload
    })
  }

})


export default feedSlice.reducer

export const fetchFeedLoading = (state)=>state.feed.isLoading;
export const fetchFeedErrored = (state)=>state.feed.errored;
export const fetchFeedData = (state)=>state.feed.feed;
export const feedStatus = (state)=>state.feed.status;