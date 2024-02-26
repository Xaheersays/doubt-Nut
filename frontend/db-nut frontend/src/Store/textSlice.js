
import {createSlice} from '@reduxjs/toolkit'
const initialState={
  text :''
}

const textSlice = createSlice({
  name:'text-slice',
  initialState,
  reducers:{
    submitQuestion : (state,action)=>{
      //add commnent
      if (action.payload.type ==='comment'){

      }else{  
        
      }
      state.text='';
    },
    setText:(state,action)=>{
      state.text = action.payload
      const data =  state.text.replace(/<[^>]*>/g, '')
      if (data==='')state.text = '';


      //TODO:
    }
  }
})


export default textSlice.reducer

export const {submitQuestion,setText} = textSlice.actions

export const questionText = (state)=>state.text.text