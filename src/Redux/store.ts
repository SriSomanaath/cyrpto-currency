"use client";

import { configureStore } from '@reduxjs/toolkit';
import { CryptoApi } from './../Services/CryptoApi';

export const store = configureStore({
    reducer: {
      [CryptoApi.reducerPath]: CryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(CryptoApi.middleware),
  });
