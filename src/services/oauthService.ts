import { baseUrl } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const oauthApi = createApi({
  reducerPath: "oauthApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["oAuth"],

  endpoints: (builder) => ({
    oAuth: builder.mutation({
      query: (data) => ({
        url: "/google/log-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["oAuth"],
    }),
  }),
});

export const { useOAuthMutation } = oauthApi;
