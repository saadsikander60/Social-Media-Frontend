"use client";

import { Bell, Search, Send } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

function Topbar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div
      className="
      w-full
      h-[90px]
      bg-white/[0.04]
      border
      border-black/5
      backdrop-blur-3xl
      rounded-[30px]
      px-7
      flex
      items-center
      justify-between
      "
    >
      {/* SEARCH */}
      <div
        className="
        hidden
        md:flex
        items-center
        gap-4
        bg-white/[0.04]
        border
        border-black/5
        rounded-2xl
        h-[58px]
        px-5
        w-[420px]
        "
      >
        <Search
          className="w-5 h-5 text-white
        "
        />

        <input
          type="text"
          placeholder="Search friends, posts..."
          className="
          bg-transparent
          outline-none
          text-white
          placeholder:text-white
          w-full
          "
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* MESSAGE */}
        <button
          className="
          w-[58px]
          h-[58px]
          rounded-2xl
          bg-white/[0.04]
          border
          border-black/5
          flex
          items-center
          justify-center
          hover:bg-white/[0.08]
          transition-all
          duration-300
          "
        >
          <Send className="w-5 h-5 text-white" />
        </button>

        {/* NOTIFICATION */}
        <button
          className="
          relative
          w-[58px]
          h-[58px]
          rounded-2xl
          bg-white/[0.04]
          border
          border-black/5
          flex
          items-center
          justify-center
          hover:bg-white/[0.08]
          transition-all
          duration-300
          "
        >
          <Bell className="w-5 h-5 text-white" />

          <div
            className="
            absolute
            top-3
            right-3
            w-3
            h-3
            rounded-full
            bg-red-500
            "
          ></div>
        </button>

        {/* PROFILE */}
        <div
          className="
          flex
          items-center
          gap-4
          bg-white/[0.04]
          border
          border-black/5
          px-4
          h-[58px]
          rounded-2xl
          "
        >
          <img
            src={user?.profile || "https://i.pravatar.cc/150?img=12"}
            alt="profile"
            className="
            w-11
            h-11
            rounded-xl
            object-cover
            "
          />

          <div className="hidden md:block">
            <h3 className="font-bold text-white">{user?.fullname}</h3>

            <p className="text-sm text-white">{user?.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
