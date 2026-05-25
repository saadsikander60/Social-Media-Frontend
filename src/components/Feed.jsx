"use client";

import { useEffect, useState } from "react";

import api from "@/services/api";

import PostCard from "./PostCard";

function Feed() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const getFeedPosts = async () => {
    try {
      const response = await api.get("/api/v1/posts/feed");

      setPosts(response.data.posts || []);
      console.log(response.data);
      console.log(response.data.posts);
    } catch (error) {
      console.log("FEED ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-10">Loading posts...</div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-400 py-10">No posts found</div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
