import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {

  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'b128dd9660mshf3dd0efcf50b542p17d23cjsn9d5f2fa06ec4'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({

  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({

    getCryptos: builder.query({

      query: (count) => createRequest(`/coins?limit=${count}`)

    }),

    getCryptoDetails: builder.query({

      query: (coinId) => createRequest(`/coin/${coinId}`)

    }),

    getCryptoHistory: builder.query({


      query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`) 

    }),

    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),

  })

});

export const {

  useGetCryptosQuery, // GetCryptos = getCryptos action we defined | use and Query is constant
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery

} = cryptoApi