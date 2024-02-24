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
      state.showFWPopup = !state.showFWPopup
      state.showFGPopup = false
    },
    toggleFGPopup:(state)=>{
      state.showFGPopup = !state.showFGPopup
      state.showFWPopup=false
    }
  }
})

export  const {toggleFGPopup,toggleFWPopup} = PopupSlice.actions;

export const showFollowers = (state)=>state.popup.showFWPopup
export const showFollowing = (state)=>state.popup.showFGPopup


export default PopupSlice.reducer
