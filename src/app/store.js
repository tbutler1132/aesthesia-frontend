import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { worldsApi } from './services/worlds'

export const store = configureStore({
  reducer: {
    [worldsApi.reducerPath]: worldsApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(worldsApi.middleware),
});
