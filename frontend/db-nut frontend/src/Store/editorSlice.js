import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    showEditor :  false
}

export const editorSlice = createSlice({
    name : 'editor',
    initialState,
    reducers : {
        hideEditor : (state)=>{
            state.showEditor = false

        },
        displayEditor:(state)=>{
            state.showEditor = true
        }
    }
})


export const {hideEditor,displayEditor} = editorSlice.actions;
export default editorSlice.reducer;