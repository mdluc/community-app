import React, { useEffect } from "react";
import Headline from "../../components/Headline/headline";
import PostsView from "../../components/PostsView/postsView";
import SearchBox from "../../components/SearchBox/search-box";
import { usePosts } from "../../context/PostsContext";

const Posts = () => {
  const { fetchPosts, handleChange, filteredPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Headline headline="community posts" />
      <SearchBox
        placeholder="Search for a post..."
        handleChange={handleChange}
      />
      <PostsView posts={filteredPosts} />
    </div>
  );
};

export default Posts;
