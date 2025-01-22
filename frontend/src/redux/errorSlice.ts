import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// form validation errors and global errors


interface ErrorState {
    global: string | null;
    emailError: string | null;
    passwordError: string | null;
}

const initialState: ErrorState = {
    global: null,
    emailError: null,
    passwordError: null,
  };

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setFormErrors(state, action: PayloadAction<Partial<ErrorState>>) {
      state.global = action.payload.global ?? state.global;
      state.emailError = action.payload.emailError ?? state.emailError;
      state.passwordError = action.payload.passwordError ?? state.passwordError;
    },
    clearFormErrors(state) {
        state.global = null;
        state.emailError = null;
        state.passwordError = null;
      },
  },
});

export const { setFormErrors, clearFormErrors } = errorSlice.actions;

export default errorSlice.reducer;
