import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  jwtToken: string | null;
  role: string | null;
  successMessage: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  loading: false,
  jwtToken: null,
  role: null,
  successMessage: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.errorMessage = null;
    },
    setJwtToken(state, action: PayloadAction<{ token: string; role: string }>) {
      state.loading = false;
      state.jwtToken = action.payload.token;
      state.role = action.payload.role;
      state.successMessage = "Login successful!";
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    logout(state) {
      state.jwtToken = null;
      state.role = null;
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
});

export const { startLoading, setJwtToken, setErrorMessage, logout } = authSlice.actions;

export default authSlice.reducer;
