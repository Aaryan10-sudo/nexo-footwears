import { baseUrl } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["order"],

  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/create-order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    getOrder: builder.mutation({
      query: (data) => ({
        url: "/get-order",
        method: "GET",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderMutation } = orderApi;
