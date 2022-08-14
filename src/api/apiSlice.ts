import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Heroes, Hero } from '../types/index';



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Heroes'],
    endpoints: builder => ({
        getHeroes: builder.query<Heroes, string>({
            query: () => '/heroes',
            providesTags: ['Heroes']
        }),
        createHero: builder.mutation<string, Hero>({
            query: (hero: Hero) => ({
                url: '/heroes',
                method: 'POST',
                body: hero }),
            invalidatesTags: ['Heroes']
        }),
        deleteHero: builder.mutation<string, string>({
            query: (id: string) => ({
                url: `/heroes/${id}`,
                method: 'DELETE'}),
            invalidatesTags: ['Heroes']
        })
    })
})



export const {useGetHeroesQuery, useCreateHeroMutation, useDeleteHeroMutation} = apiSlice;