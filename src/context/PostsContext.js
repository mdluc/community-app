import React, { useState, useContext } from "react";

export const PostsContext = React.createContext();

export const usePosts = () => {
  return useContext(PostsContext);
};

export const PostProvider = ({ children }) => {
  const [state, setState] = useState({ posts: [], searchField: ""});
  const [singlePost, setSinglePost] = useState([])
  const { posts, searchField } = state;

  const fetchPosts = (id, user) => {
    id = id || null
    user = user || null
    fetch(`https://jsonplaceholder.typicode.com/${user}/${id}/posts`)
      .then((response) => response.json())
      .then((data) => setState({ ...state, posts: data }));
  };

  const fetchSinglePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`)
      .then((response) => response.json())
      .then((data) => setSinglePost(data));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (event) => {
    setState({ ...state, searchField: event.target.value });
  };


  const value = {
    posts,
    searchField,
    fetchPosts,
    state,
    setState,
    filteredPosts,
    handleChange,
    fetchSinglePost,
    singlePost,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
