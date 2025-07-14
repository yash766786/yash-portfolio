"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import BlogCard from "@/components/BlogCard";
import {blogContentList} from "@/data/blogs.data"

export default function Blogs() {
  return (
    <div className="min-h-screen w-auto overflow-x-hidden max-w-[100vw] rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative px-4 pt-4 pb-8">
      <Spotlight />
        
      <h1 className="text-3xl font-bold text-center text-white mb-12 z-10 relative">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
        {blogContentList.map((blog) => (
          <BlogCard key={blog.key} blogContent={blog} />
        ))}
      </div>
    </div>
  );
}