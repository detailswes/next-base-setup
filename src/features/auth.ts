import { createSlice } from "@reduxjs/toolkit";
import { getSession } from "@/utils/token";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/utils/axiosInstance";
import { AppDispatch } from "@/store";
import onQueryStartedErrorToast from "@/store/error-logger";

type Payload = {
  isLogedIn: boolean;
  token: string;
};

const authSliceInitalVal: Payload = {
  isLogedIn: getSession().token ? true : false,
  token: getSession().token ?? "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authSliceInitalVal,
  reducers: {
    setAuth: (state, actions) => {
      const { isLogedIn, token } = actions.payload;
      state.isLogedIn = isLogedIn;
      state.token = token;
    },
  },
});

// rtk query to fetch aacount details

export const getAccountDetails = createApi({
  tagTypes: ["account"],
  reducerPath: "accountAPI",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => ({
        url: `https://jsonplaceholder.typicode.com/todos/10.22`,
        method: "GET",
      }),
      onQueryStarted: onQueryStartedErrorToast,
      providesTags: ["account"],
    }),
  }),
});

// it will revalidate/refetch the rtk query after login so that new data will be their for user if user is unique

export const invalidateTagsAfterLogin = (dispatch: AppDispatch) => {
  dispatch(getAccountDetails.util.invalidateTags(["account"]));

  // add more tags if you have more rtk query
};

export const { useGetAccountQuery } = getAccountDetails;

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
