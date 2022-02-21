import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Headline from '../../components/Headline/headline';
import PostsView from '../../components/PostsView/postsView';
import PostView from '../../components/PostView/postView';

const SinglePostPage = () => {
  const {id} = useParams();
  const [singlePost, setSinglePost] = useState([])

    const fetchPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`)
            .then(response=>response.json())
            .then(data=>setSinglePost(data))
    }

    useEffect(()=>{
        fetchPost();
    },[])

    return (
    <div>

        <Headline headline={singlePost.title}/>
        <Link to="/posts"><Button variant="secondary" size="sm">Go Back</Button></Link>
        <PostView {...singlePost}/>
    </div>

  )
}

export default SinglePostPage;
