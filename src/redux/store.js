import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import translator from './translator';

const store = configureStore({
    reducer: {
        theme: userReducer,
        lang: translator
    }
})
export default store;