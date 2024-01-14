import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFWPopup : false,
  showFGPopup : false,
}


export const PopupSlice = createSlice({
  name:'popup',
  initialState,
  reducers :{
    toggleFWPopup : (state)=>{
      state.showFGPopup = false
        state.showFWPopup = !state.showFWPopup
    },
    toggleFGPopup:(state)=>{
      state.showFWPopup = false
      state.showFGPopup = !state.showFGPopup
      
    }
  }
})

export  const {toggleFGPopup,toggleFWPopup} = PopupSlice.actions;
export default PopupSlice.reducer
