/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { AxiosRequestConfig } from "axios";
import { getSession, removeSession } from "./token";
import { baseUrl } from "@/constant/config";

const clearSession = () => {
  removeSession();
  window.location.reload();
};

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 40000, // 40 sec
});

// Add a request interceptor to attach the auth token to each request
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = getSession();

    if (session.token) {
      config.headers.Authorization = `Bearer ${session.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to check for success and move to catch block
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data && response.data.isSuccessful === false) {
      return Promise.reject(response.data); // Move to catch block
    }

    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      clearSession(); // Remove token and reload the app
    }

    return Promise.reject(error);
  }
);

interface RequestArgs {
  url: string;
  method: string;
  body?: any;
}

//for rtk query only

export const axiosBaseQuery = async (
  args: RequestArgs,
  extraOptions: AxiosRequestConfig
) => {
  const { url, method, body } = args;
  try {
    const result = await axiosInstance({
      url,
      method,
      data: body,
      ...extraOptions,
    });

    return { data: result.data };
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      clearSession(); // Remove token and reload the app
    }

    return {
      error: { status: error?.response?.status, data: error?.response?.data },
    };
  }
};

export default axiosInstance;
