"use client";

import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (userId) => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_API_URL, {
      transports: ["websocket"],

      withCredentials: true,

      query: {
        userId,
      },
    });

    socket.on("connect", () => {
      console.log("✅ Socket Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket Disconnected");
    });
  }

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();

    socket = null;
  }
};
