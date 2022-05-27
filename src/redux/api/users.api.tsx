import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepos } from "../../interfaces/repos.interfaces";
import { IUser } from "../../interfaces/user.interfaces";
import { IUsers } from "../../interfaces/users.interfaces";
import { IParams } from "../../pages/Users/UsersContainer/UserContainer.types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUsers: build.query<IUsers, IParams>({
      query: (params) => ({
        url: `search/users`,
        params,
      }),
      providesTags: (result) => ["Users"],
    }),
    getUserById: build.query<IUser, IParams>({
      query: (id) => ({
        url: `user/${id}`,
      }),
    }),
    getUserRepos: build.query<IRepos, IParams>({
      query: (params) => ({
        url: `/search/repositories`,
        params,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserReposQuery, useGetUserByIdQuery } =
  usersApi;
