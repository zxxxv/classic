import { configureStore, createSlice } from "@reduxjs/toolkit";

let loginstate = createSlice({
    name: 'state',
    initialState: { log: true },
    reducers: {
        setloginstate(state, action) {
            state.log = action.payload
        }
    }
})
export let { setloginstate } = loginstate.actions

export default configureStore({
    reducer: {
        loginstate: loginstate.reducer
    }
})