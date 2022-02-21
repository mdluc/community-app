import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Comments from "../Comments/comments";
import { Link } from "react-router-dom";
import "./postView.scss";


const PostView = ({ userId, id, body, title }) => {
  const [showComments, setShowComments] = useState(false);
  const handleShowComments = () => {
    setShowComments(!showComments);
  };
//  const sentanceCaseTitle = `${title.charAt(0).toUpperCase().concat(title.slice(1, title.length))}`;
  
  return (
<div>
<a name={`top${id}`} className="top"/>
    <Card border="secondary" bg="light" className="post-container">
      <Card.Header>
      <Link to={{pathname:`/posts/${id}`}}>
        <Card.Title>
        {title}
        </Card.Title>
      </Link>
      </Card.Header>
      <Card.Body>
        <Card.Text className="content">{body}</Card.Text>
        <Button className="comment-button" variant="secondary" size="md" onClick={handleShowComments}>
          {showComments ? `Hide` : `Show`} Comments
        </Button>
        <Comments showComments={showComments} postId={id} />
    </Card.Body>
    </Card>
</div>
  );
};

export default PostView;
