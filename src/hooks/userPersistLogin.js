"use client";

import { useEffect } from "react";

import { useAuth } from "@/context/AuthContext";

function usePersistLogin() {
  const { setUser } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);
}

export default usePersistLogin;
