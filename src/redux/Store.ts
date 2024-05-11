import {Store, configureStore} from '@reduxjs/toolkit';
import {GeckoApi} from '../api/GeckoApi';

export const store = configureStore({
  reducer: {
    [GeckoApi.reducerPath]: GeckoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(GeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
