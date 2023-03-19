import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { sortCharactersByName } from "./../helpers/index";
import { ICharacter, ServerResponse } from "./../types";

interface QueryProps {
  page?: number;
  search?: string;
}

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character/",
  }),
  endpoints: (build) => ({
    searchCharacters: build.query<ServerResponse<ICharacter>, QueryProps>({
      query: ({ page = 1, search = "" }) => ({
        url: `/?page=${page}${search ? "&name=" + search : ""}`,
      }),
      transformResponse: (response: ServerResponse<ICharacter>) => ({
        results: sortCharactersByName(response.results),
        info: response.info,
      }),
    }),
    getCharacterById: build.query<ICharacter, number>({
      query: (id: number) => ({ url: `/${id}` }),
    }),
  }),
});

export const { useSearchCharactersQuery, useGetCharacterByIdQuery } =
  charactersApi;
