import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const DoLogin = createAsyncThunk('DoLogin', async (requestData) => {

    const {url,data} = requestData
    // await new Promise(res=>setTimeout(res,2000))
    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!resp.ok) {
            const errorData = await resp.json();
            throw new Error(errorData.message);
        }

        const responseData = await resp.json();

        if (responseData.success) {
            return responseData.token;
        } else {
            throw new Error(responseData.message);
        }
    } catch (error) {
        throw new Error(error.message); 
    }
});



const initialState = {
    isLogin: localStorage.getItem('doubtNutToken') ? true : false,
    errorOccured:false,
    loading:false,
    status:"still"
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('doubtNutToken');
            state.isLogin = false;
        },
        
    },
    extraReducers: (builder) => {
        
        builder.addCase(DoLogin.rejected,(state,action)=>{
            state.errorOccured  = true
            state.loading = false
            state.status = 'error'
            console.error('Login failed:', action.error.message);
        })
        builder.addCase(DoLogin.pending,(state,action)=>{
            state.loading= true
            state.status = 'info'
            console.log('pending')
        })
        builder.addCase(DoLogin.fulfilled, (state, action) => {
            state.errorOccured  = false
            state.isLogin = true;
            state.loading= false
            state.status = 'success'
            console.log(action.payload)
            console.log('token fulfilled ')
            localStorage.setItem('doubtNutToken', action.payload);
        });
    },
});

export const { logout } = loginSlice.actions;

export const Loading = (state)=>state.login.loading;
export const Errored = (state)=>state.login.errorOccured;
export const Status = (state)=>state.login.status;

export const LoginState = (state)=>state.login


export default loginSlice.reducer;
