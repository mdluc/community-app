import React, { useEffect, useState } from "react";
import CommentView from "../CommentView/commentView";
import "./comments.scss";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Comments = ({ postId, showComments }) => {
  const [comments, setComments] = useState([]);
  

  const fetchComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  useEffect(() => {
    return showComments ? fetchComments() : setComments([]);
  }, [postId, showComments]);

  return (
    <div className="box">
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentView {...comment} />
        </div>
      ))}
      {showComments ? (
        <a href={`#top${postId}`}>
          <BsFillArrowUpCircleFill className="up-button" />
        </a>
      ) : null}
    </div>
  );
};

export default Comments;
