"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import infoReducer from "@/redux/infoSlice";
import { webuserApi } from "@/services/webService";
import { orderApi } from "@/services/orderService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
    [webuserApi.reducerPath]: webuserApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(webuserApi.middleware, orderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
