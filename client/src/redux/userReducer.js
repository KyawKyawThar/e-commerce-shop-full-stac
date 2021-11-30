import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    isFetching: false,
    errorMessage: false
}

export const userSlice = createSlice(({
   name: "user",
    initialState,
    reducers: {
       loginStart: state => {
           state.isFetching = true
           state.errorMessage = false
       },
        loginSuccess: (state,action) => {
           state.isFetching = false;
           state.currentUser = action.payload
        },
        loginFailure: state => {
           state.isFetching = false;
               state.errorMessage = true
        },
        logout: state => {
           state.currentUser = null
            localStorage.removeItem("user")
        }
    }
}))


export const {loginStart,loginSuccess,loginFailure,logout} =   userSlice.actions
export default userSlice.reducer