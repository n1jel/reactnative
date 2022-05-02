import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';


const store = configureStore({
    reducer: {
        theme: userReducer
    }
})
export default store;