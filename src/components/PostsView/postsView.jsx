import React from "react";
import PostView from "../PostView/postView";
import { Row, Col } from 'react-bootstrap'

const PostsView = ({ posts }) => (
    <Row xs={1} md={1} className="g-2" style={{margin:"0 auto", width:"80%"}}>
    {posts.map((post) => (
        <Col key={post.id}>
            <PostView key={post.id} {...post} />
        </Col>
    ))
    }
</Row>
);

export default PostsView;
