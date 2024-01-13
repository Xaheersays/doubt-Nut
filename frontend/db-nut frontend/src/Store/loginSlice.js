import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    isLogin :  localStorage.getItem('doubtNutToken')?true:false
}

export const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        logout : (state)=>{
            localStorage.removeItem('doubtNutToken')
            state.isLogin = false
        }
    }
})


export const {logout} = loginSlice.actions;
export default loginSlice.reducer;