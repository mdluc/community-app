import React from "react";
import "./commentView.scss"

export const CommentView = ({ body, email, name }) => {
  const username = email.substring(0, email.indexOf("@"));
  const title = name.charAt(0).toUpperCase().concat(name.slice(1,name.length));
  return (
    <div className="container">
      <div className="title">{title}</div>  
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

export default CommentView;
