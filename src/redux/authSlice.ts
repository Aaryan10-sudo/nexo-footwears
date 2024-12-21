"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const getInitialAuthState = (): AuthState => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    return {
      token: token || null,
      isLoggedIn: !!token,
    };
  }
  return {
    token: null,
    isLoggedIn: false,
  };
};

const initialState = getInitialAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      if (typeof window !== "undefined") {
        localStorage.setItem("authToken", action.payload);
      }
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
