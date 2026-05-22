function RightSidebar() {
  const onlineUsers = Array(6)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,

      username: `friend_${index + 1}`,

      profilePic: `https://i.pravatar.cc/150?img=${index + 40}`,
    }));

  const trendingTopics = [
    "#NextJS",
    "#AI",
    "#SocialMedia",
    "#NodeJS",
    "#Programming",
  ];

  return (
    <div
      className="
      hidden
      2xl:flex
      flex-col
      gap-7
      w-[360px]
      "
    >
      {/* ONLINE USERS */}
      <div
        className="
        bg-white/[0.04]
        border
        border-white/10
        backdrop-blur-3xl
        rounded-[34px]
        p-7
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        <h2 className="text-2xl font-black text-white mb-7">Online Friends</h2>

        <div className="flex flex-col gap-5">
          {onlineUsers.map((user) => (
            <div
              key={user.id}
              className="
              flex
              items-center
              justify-between
              "
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.profilePic}
                    alt={user.username}
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    object-cover
                    "
                  />

                  <div
                    className="
                    absolute
                    bottom-0
                    right-0
                    w-4
                    h-4
                    rounded-full
                    bg-green-500
                    border-2
                    border-[#030712]
                    "
                  ></div>
                </div>

                <div>
                  <h3 className="text-white font-bold">{user.username}</h3>

                  <p className="text-gray-500 text-sm">Active now</p>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="
                px-5
                h-[42px]
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                transition-all
                duration-300
                text-white
                font-semibold
                "
              >
                Chat
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING */}
      <div
        className="
        bg-white/[0.04]
        border
        border-white/10
        backdrop-blur-3xl
        rounded-[34px]
        p-7
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        <h2 className="text-2xl font-black text-white mb-7">Trending Topics</h2>

        <div className="flex flex-col gap-4">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="
              h-[62px]
              rounded-2xl
              bg-white/[0.04]
              hover:bg-white/[0.08]
              transition-all
              duration-300
              px-5
              flex
              items-center
              text-lg
              font-semibold
              text-gray-300
              cursor-pointer
              "
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
