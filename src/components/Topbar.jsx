"use client";

import { Bell, Search, Send } from "lucide-react";

function Topbar() {
  return (
    <div
      className="
      w-full
      h-[90px]
      bg-white/[0.04]
      border
      border-white/10
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
        border-white/10
        rounded-2xl
        h-[58px]
        px-5
        w-[420px]
        "
      >
        <Search className="w-5 h-5 text-gray-500" />

        <input
          type="text"
          placeholder="Search friends, posts..."
          className="
          bg-transparent
          outline-none
          text-white
          placeholder:text-gray-500
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
          border-white/10
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
          border-white/10
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
          border-white/10
          px-4
          h-[58px]
          rounded-2xl
          "
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="
            w-11
            h-11
            rounded-xl
            object-cover
            "
          />

          <div className="hidden md:block">
            <h3 className="font-bold text-white">Saad</h3>

            <p className="text-sm text-gray-400">@saad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
