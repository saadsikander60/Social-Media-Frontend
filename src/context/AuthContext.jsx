"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { connectSocket, disconnectSocket } from "@/lib/socket";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // LOAD USER FROM LOCAL STORAGE
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser && storedUser !== "undefined") {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);
      }
    } catch (error) {
      console.log("Persistence Error:", error);

      localStorage.removeItem("user");
    }

    setLoading(false);
  }, []);

  // LOGIN
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);

    // CONNECT SOCKET
    connectSocket(userData?._id);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user");

    // DISCONNECT SOCKET
    disconnectSocket();

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuth = () => useContext(AuthContext);
