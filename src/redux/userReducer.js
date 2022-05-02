import { createSlice } from "@reduxjs/toolkit";
const theme = createSlice({
    name: "theme",
    initialState: {
        theme: 'default'
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        }
        // setUser(state, action) {
        //     state.user = action.payload
        // },
        // clearUser(state, action) {
        //     state.user = {}
        // }
    }
})
export const { setTheme } = theme.actions
export default theme.reducer
