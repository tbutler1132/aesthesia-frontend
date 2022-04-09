import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const worldsApi = createApi({
    reducerPath: 'worldsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    tagTypes: ['Votes', "Comments"],
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
        providesTags: ['Votes', 'Comments']
      }),
      updateSubmission: builder.mutation({
        query: ({id, votes}) => ({
          url: `submissions/${id}`,
          method: 'PATCH',
          body: votes,
        }),
        invalidatesTags: ['Votes']
      }),
      createIterationComment: builder.mutation({
        query: ({id, comment}) => ({
          url: `songs/${id}/currentIteration/comments`,
          method: 'POST',
          body: comment,
        }),
        invalidatesTags: ['Comments']
      }),
      addSubmissionToSong: builder.mutation({
        query: ({id, submissionId}) => ({
          url: `songs/${id}/currentIteration/submissions`,
          method: 'PATCH',
          body: submissionId,
        }),
        invalidatesTags: ['Comments']
      }),
      createSubmission: builder.mutation({
        query: ({id, submission}) => ({
          url: `submissions?songId=${id}`,
          method: 'POST',
          body: submission,
        })
        // async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        //   console.log(fetchWithBQ)
        //   const newSubmission = fetchWithBQ({
        //     url: 'submissions',
        //     method: 'POST',
        //     body: 'EAR'
        //   })
        // }
      }),

    }),
})

export const {
    useGetWorldsQuery,
    useGetWorldQuery,
    useGetWorldSongsQuery,
    useGetCurrentSongQuery,
    useUpdateSubmissionMutation,
    useCreateIterationCommentMutation,
    useCreateSubmissionMutation,
    useAddSubmissionToSongMutation
} = worldsApi