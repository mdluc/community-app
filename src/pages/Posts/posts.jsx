import React, { useState, useEffect } from 'react'
import Headline from '../../components/Headline/headline';
import PostsView from '../../components/PostsView/postsView';
import SearchBox from '../../components/SearchBox/search-box';

const Posts = () => {
    const [state, setState] = useState({posts:[], searchField:""});
    const {posts, searchField} = state;

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((data) => setState({...state, posts:data}));
    }

    const filteredPosts = posts.filter(post=>
        post.title.toLowerCase().includes(searchField.toLowerCase()))

    useEffect(() => {
        fetchPosts();
    },[]);

    const handleChange = (event) => {
        setState({...state, searchField:event.target.value});
    }

    return (
             <div>
                 <Headline headline="community posts"/>
                 <SearchBox placeholder="Search for a post..." handleChange={handleChange}/>
                 <PostsView posts={filteredPosts} />
             </div>
    )
}


export default Posts;