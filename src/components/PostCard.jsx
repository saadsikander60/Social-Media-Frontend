"use client";

import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

function PostCard() {
  return (
    <div
      className="
      w-full
      bg-white/[0.04]
      border
      border-white/10
      backdrop-blur-3xl
      rounded-[34px]
      overflow-hidden
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      {/* TOP */}
      <div
        className="
        flex
        items-center
        justify-between
        p-6
        "
      >
        {/* USER */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
            className="
            w-14
            h-14
            rounded-2xl
            object-cover
            "
          />

          <div>
            <h3 className="text-lg font-bold text-white">Saad</h3>

            <p className="text-sm text-gray-500">2 mins ago</p>
          </div>
        </div>

        {/* MENU */}
        <button
          className="
          w-12
          h-12
          rounded-2xl
          bg-white/[0.04]
          hover:bg-white/[0.08]
          transition-all
          duration-300
          flex
          items-center
          justify-center
          "
        >
          <MoreHorizontal className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* IMAGE */}
      <div className="px-6">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
          alt="post"
          className="
          w-full
          h-[500px]
          object-cover
          rounded-[28px]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* ACTIONS */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/[0.04]
              hover:bg-red-500/20
              transition-all
              duration-300
              flex
              items-center
              justify-center
              "
            >
              <Heart className="w-6 h-6 text-white" />
            </button>

            <button
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/[0.04]
              hover:bg-blue-500/20
              transition-all
              duration-300
              flex
              items-center
              justify-center
              "
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </button>

            <button
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/[0.04]
              hover:bg-cyan-500/20
              transition-all
              duration-300
              flex
              items-center
              justify-center
              "
            >
              <Send className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* SAVE */}
          <button
            className="
            w-14
            h-14
            rounded-2xl
            bg-white/[0.04]
            hover:bg-yellow-500/20
            transition-all
            duration-300
            flex
            items-center
            justify-center
            "
          >
            <Bookmark className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* STATS */}
        <div className="flex items-center gap-6 mt-6">
          <p className="text-white font-semibold">12.5k Likes</p>

          <p className="text-gray-400">1.2k Comments</p>
        </div>

        {/* CAPTION */}
        <p className="text-gray-300 leading-relaxed mt-5 text-lg">
          <span className="font-bold text-white mr-2">Saad</span>
          Beautiful moments deserve beautiful memories ✨
        </p>
      </div>
    </div>
  );
}

export default PostCard;
