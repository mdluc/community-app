import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Headline from "../../components/Headline/headline";
import PostView from "../../components/PostView/postView";
import { Row } from "react-bootstrap";
import { usePosts } from "../../context/PostsContext";

const SinglePostPage = () => {
  const { fetchSinglePost, singlePost } = usePosts();
  const { id } = useParams();
  
  useEffect(() => {
    fetchSinglePost(id);
  }, []);

  return (
    <div>
      <Headline headline={singlePost.title} />
      <Link to="/posts">
        <Button variant="secondary" size="sm">
          Go Back
        </Button>
      </Link>
        <div className="posts-container">
        <PostView {...singlePost} />
        </div>
    </div>
  );
};

export default SinglePostPage;
