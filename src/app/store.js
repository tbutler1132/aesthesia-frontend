import { configureStore } from '@reduxjs/toolkit';
import { worldsApi } from './services/worlds'
import { spotifyApi } from './services/spotify'
import createWorldReducer from '../features/world/createWorldSlice';
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    [worldsApi.reducerPath]: worldsApi.reducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    createWorld: createWorldReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(worldsApi.middleware),
});
