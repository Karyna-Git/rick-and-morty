import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter, ServerResponse } from "./../types";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character",
  }),
  endpoints: (build) => ({
    searchCharacters: build.query<ICharacter[], string>({
      query: (search: string) => ({ url: `/?name=${search}` }),
      transformResponse: (response: ServerResponse<ICharacter>) =>
        response.results,
    }),
    getCharacterById: build.query<ICharacter, number>({
      query: (id: number) => ({ url: `/${id}` }),
    }),
  }),
});

export const { useSearchCharactersQuery, useGetCharacterByIdQuery } =
  charactersApi;
