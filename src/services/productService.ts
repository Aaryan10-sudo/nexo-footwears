import { baseUrl } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WrappedBuildError } from "next/dist/server/base-server";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["product"],

  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    readProduct: builder.query({
      query: () => {
        return {
          url: "/product/get",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    readSpecificProduct: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data.id}`,
        method: "PATCH",
        body: data.info,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useReadProductQuery,
  useReadSpecificProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
