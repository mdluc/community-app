import React, { useState, useEffect } from "react";
import Headline from "../../components/Headline/headline";
import PostsView from "../../components/PostsView/postsView";
import SearchBox from "../../components/SearchBox/search-box";
import { connect } from "react-redux";
import { setPosts } from "../../redux/post/post.actions";
import { selectPostsList } from "../../redux/post/post.selectors";
import { createStructuredSelector } from "reselect";

const Posts = ({ list, setPosts}) => {
  const [searchField, setSearchField] = useState("");
  
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = list.filter((post) =>
    post.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      <Headline headline="community posts" />
      <SearchBox
        placeholder="Search for a post..."
        handleChange={handleChange}
      />
      <PostsView posts={filteredPosts} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  list: selectPostsList,
});

const mapDispatchToProps = (dispatch) => ({
  setPosts: (list) => dispatch(setPosts(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
