import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";
import "./header.scss";

const Header = () => {
  const location = useLocation()
  const links = [
    {
      name: "Home",
      path: "/",
      icon: "",
    },
    {
      name: "Posts",
      path: "/posts",
      icon: "",
    },
    {
      name: "Our Stuff",
      path: "/stuff",
      icon: "",
    },
  ];
  return (
    <div className="header">
      <Link to="/" className="option">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={`option ${location.pathname === link.path ? "active" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
