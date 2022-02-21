import React from "react";
import PostView from "../PostView/postView";
import { Row, Col } from 'react-bootstrap'

const PostsView = ({ posts }) => {
    return (
        <Row xs={1} md={3} className="g-3" style={{margin:0}}>
            {posts.map((post) => (
                <Col key={post.id}>
                    <PostView key={post.id} {...post} />
                </Col>
            ))
            }

        </Row>
    );
};

export default PostsView;
