function Stories() {
  // TEMP STORIES DATA
  const stories = Array(8)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,

      username: `user_${index + 1}`,

      profilePic: `https://i.pravatar.cc/150?img=${index + 10}`,
    }));

  return (
    <div
      className="
      w-full
      bg-white/[0.04]
      border
      border-white/10
      backdrop-blur-3xl
      rounded-[34px]
      p-6
      overflow-x-auto
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h2 className="text-2xl font-black text-white">Stories</h2>

          <p className="text-gray-500 mt-1">Watch your friends stories</p>
        </div>
      </div>

      {/* STORIES */}
      <div className="flex items-center gap-6 min-w-max">
        {/* CREATE STORY */}
        <div
          className="
          flex
          flex-col
          items-center
          gap-3
          cursor-pointer
          group
          "
        >
          <div
            className="
            w-[88px]
            h-[88px]
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            flex
            items-center
            justify-center
            text-5xl
            font-light
            text-white
            shadow-[0_10px_30px_rgba(59,130,246,0.35)]
            "
          >
            +
          </div>

          <p
            className="
            text-sm
            text-gray-300
            font-semibold
            "
          >
            Your Story
          </p>
        </div>

        {/* STORY ITEMS */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="
            flex
            flex-col
            items-center
            gap-3
            cursor-pointer
            group
            "
          >
            {/* STORY IMAGE */}
            <div
              className="
              p-[3px]
              rounded-full
              bg-gradient-to-r
              from-pink-500
              via-red-500
              to-yellow-500
              hover:scale-105
              transition-all
              duration-300
              "
            >
              <img
                src={story.profilePic}
                alt={story.username}
                className="
                w-[82px]
                h-[82px]
                rounded-full
                object-cover
                border-4
                border-[#030712]
                "
              />
            </div>

            {/* USERNAME */}
            <p
              className="
              text-sm
              text-gray-300
              font-semibold
              max-w-[90px]
              truncate
              group-hover:text-white
              transition-all
              duration-300
              "
            >
              {story.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
