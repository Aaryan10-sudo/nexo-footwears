import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import infoReducer from "@/redux/infoSlice";
import { webuserApi } from "@/services/webService";

const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
    [webuserApi.reducerPath]: webuserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(webuserApi.middleware),
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export default store;
