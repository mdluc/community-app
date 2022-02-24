import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Headline from "../../components/Headline/headline";
import UserView from "../../components/UserView/userView";
import './user.scss'

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
  <Headline headline="OUR STUFF"/>
  <Row xs={1} md={3} xl={4} className="g-3 content">
      {users.map((user) => (
        <Col 
        key={user.id} style={{height:`100%`}}><UserView key={user.id} {...user}/></Col>
      ))}
    </Row>
</div>
  );
};

export default Users;
