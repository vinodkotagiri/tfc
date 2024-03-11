import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        darkMode: false
    },
    reducers: {
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleDarkMode } = appSlice.actions
export default appSlice.reducer