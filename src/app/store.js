import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/dataSlice'

const store = configureStore({
    reducer :  {
        api : rootReducer
    }
})

export default store;
