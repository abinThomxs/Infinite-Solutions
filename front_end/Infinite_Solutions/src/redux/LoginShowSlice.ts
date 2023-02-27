import { createSlice } from '@reduxjs/toolkit';

interface LoginShowState {
  showLogin: boolean;
}

const initialState: LoginShowState = {
  showLogin: false,
};

export const loginSlice = createSlice({
  name: 'loginShow',
  initialState,
  reducers: {
    login: (state) => {
      state.showLogin = true;
    },
    logout: (state) => {
      state.showLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
