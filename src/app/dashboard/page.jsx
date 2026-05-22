"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Stories from "@/components/Stories";
import PostCard from "@/components/PostCard";
import RightSidebar from "@/components/RightSidebar";

function DashboardPage() {
  return (
    <div
      className="
      min-h-screen
      bg-[#030712]
      text-white
      flex
      "
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div
        className="
        flex-1
        flex
        justify-center
        "
      >
        {/* CENTER */}
        <div
          className="
          w-full
          max-w-[920px]
          px-5
          lg:px-8
          py-6
          "
        >
          {/* TOPBAR */}
          <Topbar />

          {/* STORIES */}
          <div className="mt-8">
            <Stories />
          </div>

          {/* POSTS */}
          <div className="mt-8 flex flex-col gap-8">
            <PostCard />

            <PostCard />

            <PostCard />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="px-6 py-6">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
