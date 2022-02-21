import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Headline from '../../components/Headline/headline';
import PostsView from '../../components/PostsView/postsView';
import './postsByUser.scss'

const PostsByUser = () => {
    const {id} = useParams();
    const [postsByUser, setPostsByUser] = useState([])
    
    const fetchPostsByUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((data) => setPostsByUser(data));
  };

  console.log(postsByUser)
  useEffect(()=>{
      fetchPostsByUser();
  },[])

     return (
        <div>
        <Headline headline={`POSTS BY USED ID#:${id}`}/>
        <Link to="/stuff"><Button variant="secondary" size="sm">Go Back</Button></Link>
        <PostsView posts={postsByUser}/>
        </div>
  )
}


export default PostsByUser