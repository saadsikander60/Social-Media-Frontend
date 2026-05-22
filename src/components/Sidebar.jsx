"use client";

import Link from "next/link";

import {
  House,
  User,
  Bell,
  MessageCircle,
  Settings,
  LogOut,
  Compass,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      icon: House,
      link: "/dashboard",
    },

    {
      name: "Explore",
      icon: Compass,
      link: "/explore",
    },

    {
      name: "Messages",
      icon: MessageCircle,
      link: "/messages",
    },

    {
      name: "Notifications",
      icon: Bell,
      link: "/notifications",
    },

    {
      name: "Profile",
      icon: User,
      link: "/profile",
    },

    {
      name: "Settings",
      icon: Settings,
      link: "/settings",
    },
  ];

  return (
    <div
      className="
      hidden
      lg:flex
      flex-col
      w-[310px]
      h-screen
      bg-white/[0.04]
      border-r
      border-white/10
      backdrop-blur-3xl
      sticky
      top-0
      left-0
      px-6
      py-7
      "
    >
      {/* TOP SECTION */}
      <div className="flex-1 overflow-y-auto">
        {/* LOGO */}
        <div className="mb-16">
          <h1
            className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-indigo-500
            bg-clip-text
            text-transparent
            tracking-wider
            "
          >
            Flowin
          </h1>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-5">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.link}
                className="
                flex
                items-center
                gap-5
                h-[72px]
                px-6
                rounded-[28px]
                bg-white/[0.03]
                hover:bg-gradient-to-r
                hover:from-blue-600
                hover:to-indigo-600
                transition-all
                duration-300
                group
                shadow-[0_5px_20px_rgba(0,0,0,0.15)]
                "
              >
                {/* ICON */}
                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/[0.05]
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* TEXT */}
                <span
                  className="
                  text-lg
                  font-semibold
                  text-gray-200
                  "
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-auto pt-10">
        <button
          className="
          w-full
          h-[72px]
          rounded-[28px]
          bg-red-500/10
          hover:bg-red-500/20
          border
          border-red-500/20
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-4
          text-red-400
          font-bold
          text-lg
          shadow-[0_5px_20px_rgba(239,68,68,0.15)]
          "
        >
          <LogOut className="w-6 h-6" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
