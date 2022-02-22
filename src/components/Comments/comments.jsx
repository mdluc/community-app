import React, { useEffect, useState } from "react";
import Comment from "../Comment/comment";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./comments.scss";

import { connect } from "react-redux";
import {
  setComments,
  setLoadingComments,
} from "../../redux/comment/comment.actions";

let Comments = ({
  comments,
  isLoading,
  postId,
  dispatchSetComments,
  dispatchSetLoading,
}) => {
  // const [comments, setComments] = useState([]);

  const fetchComments = () => {
    dispatchSetLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        dispatchSetComments(data);
        dispatchSetLoading(false);
      });
  };

  useEffect(() => {
    if (!isLoading) 
    fetchComments();
  }, [isLoading]);

  return (
    <div className="box">
    
      {
      
      comments.comments.map((comment) => (
      
        <div key={comment.id}>

          <Comment {...comment} />
        </div>
      ))}
      {(
        <a href={`#top${postId}`}>
          <BsFillArrowUpCircleFill className="up-button" />
        </a>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  {console.log(state)}
  return {
    comments: state.comments,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  dispatchSetComments: setComments,
  dispatchSetLoading: setLoadingComments,
};
Comments = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default Comments;
