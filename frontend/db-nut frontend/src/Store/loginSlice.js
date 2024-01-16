import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const DoLogin = createAsyncThunk('DoLogin', async (requestData) => {
//     const resp = await fetch('http://localhost:3000/user/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData)
//     });

//     const data =  await resp.json();
//     console.log(data)
//     if(!data || !data.success){
//         return new Error(data.message || 'cant fetch man')
//     }else{
//         return  data.token
//     }
// });


export const DoLogin = createAsyncThunk('DoLogin', async (requestData) => {
    try {
        const resp = await fetch('http://localhost:3000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (!resp.ok) {
            const errorData = await resp.json();
            throw new Error(errorData.message);
        }

        const responseData = await resp.json();

        if (responseData.success) {
            return responseData.token; // Assuming you want to store the token in the state
        } else {
            throw new Error(responseData.message);
        }
    } catch (error) {
        throw new Error(error.message); // Return a string message instead of the Error object
    }
});



const initialState = {
    isLogin: localStorage.getItem('doubtNutToken') ? true : false,
    errorOccured:false,
    
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
            console.error('Login failed:', action.error.message);
        })
        builder.addCase(DoLogin.pending,(state,action)=>{
            console.log('pending')
        })
        builder.addCase(DoLogin.fulfilled, (state, action) => {
            state.errorOccured  = false
            state.isLogin = true;
            console.log(action.payload)
            console.log('token fulfilled ')
            localStorage.setItem('doubtNutToken', action.payload);
        });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
