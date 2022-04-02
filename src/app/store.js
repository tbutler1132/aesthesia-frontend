import { configureStore } from '@reduxjs/toolkit';
import { worldsApi } from './services/worlds'

export const store = configureStore({
  reducer: {
    [worldsApi.reducerPath]: worldsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(worldsApi.middleware),
});
