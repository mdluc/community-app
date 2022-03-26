import React from "react";
import PostView from "../PostView/postView";

const PostsView = ({ posts }) => (
  <div className="posts-container">
    {posts.map((post) => (
      <div key={post.id}>
        <PostView key={post.id} {...post} />
      </div>
    ))}
  </div>
);

export default PostsView;
