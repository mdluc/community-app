import React from "react";
import { Button, Badge } from "react-bootstrap";
import CustomBadge from "../CustomBadge/customBadge";
import { BsFillChatRightQuoteFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillChrome, AiTwotoneMail } from "react-icons/ai";
import {IoLocation} from "react-icons/io5"
import  {Link} from 'react-router-dom'
import "./userView.scss";

const UserView = ({ id, name, address, company, email, website, phone }) => {
  const tags = company.bs.split(" ");
  return (
    <div className="profile-container">
      <Badge bg="secondary">Profile</Badge>
      <img
        src={`https://robohash.org/${id}?set=set5`}
        alt={name}
        className="circular-square"
      />
      <span className="info">
        <span>
          {name}
        </span>
        <span className="social">
          <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
            <BsFillTelephoneFill />
          </a>
          <a href={`http://${website}`} target="_blank" rel="noreferrer">
            <AiFillChrome />
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <AiTwotoneMail />
          </a>
        </span>
        <span className="location"><IoLocation/><span>{address.city}</span></span>

        <span className="catchPhrase">
          <BsFillChatRightQuoteFill /><span>{company.catchPhrase}</span>
        </span>
        <span className="badges">
          {tags.map((item, index) => (
            <CustomBadge key={index} name={item}>
              {item}
            </CustomBadge>
          ))}
        </span>
      </span>
      <Button variant="secondary" size="sm" className="btn">
      <Link to={{pathname:`/stuff/${id}/posts`}} className="option">More posts by this user</Link>
      </Button>
    </div>
  );
};

export default UserView;
