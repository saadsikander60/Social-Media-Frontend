import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // ACCESS TOKEN EXPIRED
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // REFRESH ACCESS TOKEN
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/users/refresh-token`,
          {},
          {
            withCredentials: true,
          },
        );

        // RETRY ORIGINAL REQUEST
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("user");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
