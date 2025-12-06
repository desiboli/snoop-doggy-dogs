import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type Dog from "../models/dog"
import { faker } from "@faker-js/faker"

export const dogsApi = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api" }),
  endpoints: (builder) => ({
    fetchDogs: builder.query<Dog[], number>({
      query: (count) => `/breeds/image/random/${count}`,
      transformResponse: (response: { message: string[]; status: string }) =>
        response.message.map(
          (url: string) =>
            ({
              name: faker.person.firstName(),
              photo: url,
              breed: url.split("/")[4],
            } as Dog)
        ),
    }),
    fetchDogsByBreed: builder.query<Dog[], { breed: string; count: number }>({
      query: ({ breed, count }) => `/breed/${breed}/images/random/${count}`,
      transformResponse: (response: { message: string[]; status: string }) =>
        response.message.map(
          (url: string) =>
            ({
              name: faker.person.firstName(),
              photo: url,
              breed: url.split("/")[4],
            } as Dog)
        ),
    }),
    fetchListAllBreeds: builder.query<string[], void>({
      query: () => "/breeds/list/all",
      transformResponse: (response: {
        message: Record<string, string[]>
        status: string
      }) => Object.keys(response.message),
    }),
  }),
})

export const {
  useFetchDogsQuery,
  useFetchDogsByBreedQuery,
  useFetchListAllBreedsQuery,
} = dogsApi
