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
      getWorldSongs: builder.query({
        query: (id) => `worlds/${id}/songs`,
      }),
      getCurrentSong: builder.query({
        query: (id) => `worlds/${id}/currentSong`,
      }),
    }),
})

export const {
    useGetWorldsQuery,
    useGetWorldQuery,
    useGetWorldSongsQuery,
    useGetCurrentSongQuery,
} = worldsApi