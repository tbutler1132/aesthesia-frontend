import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const worldsApi = createApi({
    reducerPath: 'worldsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    tagTypes: ['Votes'],
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
        providesTags: ['Votes']
      }),
      updateSubmission: builder.mutation({
        query: ({id, votes}) => ({
          url: `submissions/${id}`,
          method: 'PATCH',
          body: votes,
        }),
        invalidatesTags: ['Votes']
      }),
    }),
})

export const {
    useGetWorldsQuery,
    useGetWorldQuery,
    useGetWorldSongsQuery,
    useGetCurrentSongQuery,
    useUpdateSubmissionMutation
} = worldsApi