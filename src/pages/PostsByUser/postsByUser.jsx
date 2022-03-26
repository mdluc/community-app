import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Headline from "../../components/Headline/headline";
import PostsView from "../../components/PostsView/postsView";
import { usePosts } from "../../context/PostsContext";
import "./postsByUser.scss";

const PostsByUser = () => {
  const { id } = useParams();
  const { fetchPosts, filteredPosts } = usePosts();

  useEffect(() => {
    fetchPosts(id, "users");
  }, []);

  return (
    <div>
      <Headline headline={`POSTS BY USER ID#:${id}`} />
      <Link to="/stuff">
        <Button variant="secondary" size="sm">
          Go Back
        </Button>
      </Link>
      <PostsView posts={filteredPosts} />
    </div>
  );
};

export default PostsByUser;
