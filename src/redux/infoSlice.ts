import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InfoState {
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
}

const initialState: InfoState = {
  name: "",
  email: "",
  phoneNumber: "",
  image: "",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        phoneNumber: string;
        image: string;
      }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.image = action.payload.image;
    },
    clearUserInfo: (state) => {
      state.name = "";
      state.email = "";
      state.phoneNumber = "";
      state.image = "";
    },
  },
});

export const { setUserInfo, clearUserInfo } = infoSlice.actions;

export default infoSlice.reducer;
