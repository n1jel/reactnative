import { createSlice } from "@reduxjs/toolkit";
const language = createSlice({
    name: "language",
    initialState: {
        lang: 'en'
    },
    reducers: {
        setLang(state, action) {
            state.lang = action.payload
        }
    }
})
export const { setLang } = language.actions
export default language.reducer
