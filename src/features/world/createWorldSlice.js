import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    description: "",
    referenceTracks: [],
    referenceImages: [],
    tags: []
}

export const createWorldSlice = createSlice({
    name: 'createWorld',
    initialState,
    reducers: {
        setDescription: (state, action) => {
            state.description = action.payload
        },
        addReferenceTrack: (state, action) => {
            state.referenceTracks.push(action.payload)
        },
        addTag: (state, action) => {
            state.tags.push(action.payload)
        },
        addReferenceImage: (state, action) => {
            state.referenceImages.push(action.payload)
        }
    }
})

export const { setDescription, addReferenceTrack, addTag, addReferenceImage } = createWorldSlice.actions

export default createWorldSlice.reducer