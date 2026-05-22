"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { getSocket } from "@/lib/socket";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = getSocket();

    if (!socket) return;

    // ONLINE USERS
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    // NEW NOTIFICATION
    socket.on("newNotification", (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("getOnlineUsers");

      socket.off("newNotification");
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        onlineUsers,
        notifications,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
