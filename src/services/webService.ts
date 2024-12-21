import { baseUrl } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const webuserApi = createApi({
  reducerPath: "webuserApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["webUser"],

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["webUser"],
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: "/log-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["webUser"],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = webuserApi;
