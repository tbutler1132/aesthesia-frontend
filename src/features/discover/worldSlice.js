import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const worldSlice = createSlice({
    name: 'world',
    initialState: { worlds: [] }

})

export default worldSlice.reducer