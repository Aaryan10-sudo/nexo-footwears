"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import infoReducer from "@/redux/infoSlice";
import { webuserApi } from "@/services/webService";
import { orderApi } from "@/services/orderService";
import { productApi } from "@/services/productService";
import { oauthApi } from "@/services/oauthService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
    [webuserApi.reducerPath]: webuserApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [oauthApi.reducerPath]: oauthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      webuserApi.middleware,
      orderApi.middleware,
      productApi.middleware,
      oauthApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
