import React, { useEffect } from "react";
import Comment from "../Comment/comment";
import "./comments.scss";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useComments } from "../../context/CommentsContext";

const Comments = ({ postId, showComments }) => {
  const {comments, fetchComments, setComments} = useComments();

  useEffect(() => {
    return showComments ? fetchComments(postId) : setComments([]);
  }, [postId, showComments]);

  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
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