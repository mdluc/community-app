import React from "react";
import "./comment.scss"

export const Comment = ({ body, email, name }) => {
  const username = email.substring(0, email.indexOf("@"));
  const title = name.charAt(0).toUpperCase().concat(name.slice(1,name.length));
  return (
    <div className="comment-container">
      <div className="title">{title}</div>  
      <hr/>
      <div className="comment">
        <h3>&#10077;</h3>  
        <span>{body}</span>
      </div>
      <span className="posted-by">
        Posted by: <a href={`mailto:${email}`}>{username}</a>
      </span>
    </div>
  );
};

export default Comment;
