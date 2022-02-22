import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Headline from '../../components/Headline/headline';
import PostsView from '../../components/PostsView/postsView';
import {connect} from 'react-redux'
import { setPosts } from "../../redux/post/post.actions";
import { selectPostsList } from "../../redux/post/post.selectors";
import { createStructuredSelector } from "reselect";
import './postsByUser.scss'


let PostsByUser = ({ list, setPosts}) => {
  const {id} = useParams();

    const fetchPostsByUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  useEffect(()=>{
      fetchPostsByUser();
  },[])

     return (
        <div>
        <Headline headline={`POSTS BY USED ID#:${id}`}/>
        <Link to="/stuff"><Button variant="secondary" size="sm">Go Back</Button></Link>
        <PostsView posts={list}/>
        </div>
  )
}


const mapStateToProps = createStructuredSelector({
  list: selectPostsList,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (list) => dispatch(setPosts(list)),
});

PostsByUser = connect(mapStateToProps,mapDispatchToProps)(PostsByUser)
export default PostsByUser