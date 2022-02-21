import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="option">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/" className="option">
          HOME
        </Link>
        <Link to="/posts" className="option">
          POSTS
        </Link>
        <Link to="/stuff" className="option">
          OUR STUFF
        </Link>
      </div>
    </div>
  );
};

export default Header;
