"use client";
import {
  HeartStraight
} from @phosphor-icons/react"

import {

  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";

function PostCard({ post }) {
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
            src={post?.owner?.profile}
            alt="user"
            className="
            w-14
            h-14
            rounded-2xl
            object-cover
            "
          />

          <div>
            <h3 className="text-lg font-bold text-white">
              {post?.owner?.fullname}
            </h3>

            <p className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(post?.createdAt), {
                addSuffix: true,
              })}
            </p>
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
      {post?.images?.length > 0 && (
        <div className="px-6">
          <img
            src={post.images[0]}
            alt="post"
            className="
            w-full
            h-[500px]
            object-cover
            rounded-[28px]
            "
          />
        </div>
      )}

      {/* VIDEO */}
      {post?.video && (
        <div className="px-6">
          <video
            controls
            className="
            w-full
            max-h-[600px]
            rounded-[28px]
            object-cover
            "
          >
            <source src={post.video} type="video/mp4" />
          </video>
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6 pt-7">
        {/* CAPTION */}
        <p className="text-gray-300 leading-relaxed text-lg">
          <span className="font-bold text-white mr-2">
            {post?.owner?.fullname}
          </span>

          {post?.content}
        </p>

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-7">
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
              <HeartStraight
  size={28}
  weight="fill"
  className="text-white"
/>
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
          <p className="text-white font-semibold">{post?.likesCount} Likes</p>

          <p className="text-gray-400">{post?.commentsCount} Comments</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
