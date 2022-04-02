import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const worldsApi = createApi({
    reducerPath: 'worldsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    endpoints: (builder) => ({
      getWorlds: builder.query({
        query: () => `worlds`,
      }),
      getWorld: builder.query({
        query: (id) => `worlds/${id}`,
      }),
    }),
})

export const {
    useGetWorldsQuery,
    useGetWorldQuery
} = worldsApi