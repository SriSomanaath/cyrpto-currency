"use client";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '5811369c61msh422c3eb262c22c4p1943b9jsne7dc9874dd46',
};

// 5189f7637emsh1c21f09730c9945p113d9ejsn4da5a03c0b69

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const CryptoApi = createApi({
  reducerPath: 'CryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl:' https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    })
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = CryptoApi;