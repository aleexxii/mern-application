
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
    isAuthenticated : boolean;
    userRole : string | null;
    userInfo : object | null | any;
}

const initialState : AuthState = {
    isAuthenticated : false,
    userRole : null,
    userInfo : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loginSuccess : (state, action : PayloadAction<{userRole : string;userInfo : any }>) => {
            state.isAuthenticated = true;
            state.userRole = action.payload.userRole;
            state.userInfo = action.payload.userInfo
        }
    }
})

export const { loginSuccess} = authSlice.actions;
export default authSlice.reducer

