import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/spotify' }),
    endpoints: (builder) => ({
      searchTracks: builder.query({
        query: (search) => `search?q=${search}`,
      }),
    }),
})

export const {
    useLazySearchTracksQuery
} = spotifyApi