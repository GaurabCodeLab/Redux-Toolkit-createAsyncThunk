import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//action
export const getData = createAsyncThunk("raja", async (args, {rejectWithValue})=>{
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await result.json();
        return response;
    } catch (error) {
        return rejectWithValue("Oops an error found")
    }
    
})

export const dataSlice = createSlice({
    name : "api call",
    initialState : {
        users : [],
        loading : false,
        error : null
    },
    extraReducers : {
        [getData.pending] : (state)=>{
            state.loading = true
        },
        [getData.fulfilled] : (state, action)=>{
             state.loading = false;
             state.users = action.payload
        },
        [getData.rejected] : (state, action)=>{
             state.loading = false;
             state.error = action.payload
        }
    }
})

export default dataSlice.reducer;