import { useState } from "react";
import { posts } from "../data/posts";
import PostCard from "./PostCard";
import { Post } from "../types";

const PostSection = () => {
  const postsPerPage = 6;
  const [visiblePosts, setVisiblePosts] = useState(postsPerPage);

  const handleShowMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsPerPage);
  };

  const remainingPosts = posts.length - visiblePosts;
  const hasMorePosts = remainingPosts > 0;

  return (
    <section className="py-5 max-w-[1000px] mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-[48px] leading-[72px] font-normal">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
          {posts.slice(0, visiblePosts).map((post: Post) => (
            <PostCard key={crypto.randomUUID()} post={post} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-20 mb-28">
        {hasMorePosts ? (
          <button
            className="w-[219px] h-[60px] px-14 py-4 rounded-full border-2 border-[#0A2640] text-[#0A2640] hover:text-blue-800 hover:border-blue-800 justify-center items-center inline-flex font-bold transition-all duration-300 ease-in-out"
            onClick={handleShowMore}
          >
            <span>Load more</span>
          </button>
        ) : (
          <p className="mb-4 text-gray-500 text-center">
            No more posts to show..
          </p>
        )}
      </div>
    </section>
  );
};

export default PostSection;
