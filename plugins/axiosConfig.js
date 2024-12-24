import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosRequest = axios.create({
    // baseURL: `https://fakestoreapi.com/`,
    baseURL: `https://api.anaqatyy.com/api/`,
    headers: {
      common: {
        Accept: "application/json",
      },
    },
  });

  axiosRequest.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = parseInt(error.response && error.response.status);
      if (code === 404) {
        redirect("/404");
      } else if (code === 500) {
        redirect("/500");
      }
    }
  );

  nuxtApp.provide("axiosRequest", axiosRequest);
});
