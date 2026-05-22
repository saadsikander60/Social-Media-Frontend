import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user");

    const user =
      storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return config;
  },

  (error) => Promise.reject(error),
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    // AUTO LOGOUT
    if (error.response?.status === 401) {
      localStorage.removeItem("user");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
