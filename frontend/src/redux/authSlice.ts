import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  jwtToken: string | null;
  role: string | null;
  errorMessage: string | null;
  isAuthenticated : boolean;
}

const initialState: AuthState = {
  loading: false,
  jwtToken: null,
  role: null,
  errorMessage: null,
  isAuthenticated : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.errorMessage = null;
    },
    loginSuccess(state, action: PayloadAction<{ token: string; role: string }>) {
      state.loading = false;
      state.jwtToken = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    logout(state) {
      state.jwtToken = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { startLoading, loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;
