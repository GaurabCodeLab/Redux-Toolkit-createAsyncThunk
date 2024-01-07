import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getData = createAsyncThunk('api call', async ()=>{
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!result.ok){
            throw new Error("something went wrong");
        }
        const response = await result.json();
        return response
    } catch (error) {
        console.log(error);
    }
});

export const usersSlice = createSlice({
    name : "users",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
  extraReducers : (builder)=>{
     builder.addCase(getData.pending, (state)=>{
        state.loading = true;
     });
     builder.addCase(getData.fulfilled, (state, action)=>{
        state.loading = false;
        state.data = action.payload
     });
     builder.addCase(getData.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
     })
  }
})

export default usersSlice.reducer;


// if API is calling using axios library then code is given below :-

//import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getData = createAsyncThunk('api call', async ()=>{
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// });

// export const usersSlice = createSlice({
//     name : "users",
//     initialState : {
//         data : [],
//         loading : false,
//         error : null
//     },
//   extraReducers : (builder)=>{
//      builder.addCase(getData.pending, (state)=>{
//         state.loading = true;
//      });
//      builder.addCase(getData.fulfilled, (state, action)=>{
//         state.loading = false;
//         state.data = action.payload
//      });
//      builder.addCase(getData.rejected, (state, action)=>{
//         state.loading = false;
//         state.error = action.payload;
//      })
//   }
// })

// export default usersSlice.reducer;




