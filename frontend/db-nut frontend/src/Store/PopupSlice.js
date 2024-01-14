import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopup : false
}


export const PopupSlice = createSlice({
  name:'Loader',
  initialState,
  reducers :{
    togglePopup : (state)=>{
        state.showPopup = !state.showPopup
    }
  }
})

export  const {togglePopup} = PopupSlice.actions;
export default PopupSlice.reducer
