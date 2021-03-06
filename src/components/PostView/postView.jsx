import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Comments from "../Comments/comments";
import { Link } from "react-router-dom";
import "./postView.scss";

import { useLocation } from "react-router-dom";
import { CommentProvider } from "../../context/CommentsContext";

const PostView = ({ userId, id, body, title, newPath }) => {
  const [showComments, setShowComments] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  //const sentanceCaseTitle = `${title.charAt(0).toUpperCase().concat(title.slice(1, title.length))}`;

  return (
    <div>
      <a name={`top${id}`} className="top" />
      <Card border="secondary" bg="light" className="post-container">
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text">{body}</Card.Text>
          {path.length <= 6 ? (
            <div className="comment-button">
              <Link to={{ pathname: `/posts/${id}` }}>Read more</Link>
            </div>
          ) : path.includes("stuff") ? (
            <div className="comment-button">
              <Link to={{ pathname: `/posts/${id}` }}>Read more</Link>
            </div>
          ) : (
            <>
              <Button
                className="comment-button btn"
                variant="secondary"
                size="md"
                onClick={handleShowComments}
              >
                {showComments ? `Hide` : `Show`} Comments
              </Button>
              <CommentProvider>
                <Comments showComments={showComments} postId={id} />
              </CommentProvider>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostView;
