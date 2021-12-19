import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'b128dd9660mshf3dd0efcf50b542p17d23cjsn9d5f2fa06ec4'
  
  
}
  
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
  
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })


export const cryptoNewsApi = createApi({

    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),

    endpoints: (builder) => ({

        getCryptoNews: builder.query({

            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)

        })

    })


})


export const { useGetCryptoNewsQuery } = cryptoNewsApi;