import { configureStore } from '@reduxjs/toolkit';
import { worldsApi } from './services/worlds'
import { spotifyApi } from './services/spotify'
import createWorldReducer from '../features/world/createWorldSlice';

export const store = configureStore({
  reducer: {
    [worldsApi.reducerPath]: worldsApi.reducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    createWorld: createWorldReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(worldsApi.middleware),
});
