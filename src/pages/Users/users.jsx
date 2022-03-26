import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Headline from "../../components/Headline/headline";
import UserView from "../../components/UserView/userView";
import "./user.scss";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Headline headline="OUR STUFF" />
      <div className="users-container">
        {users.map((user) => (
          <UserView key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
