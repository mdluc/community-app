import React, {useState, useContext} from 'react'

export const CommentsContext = React.createContext();

export const useComments = () => {
    return useContext(CommentsContext)
}

export const CommentProvider = ({children}) => {
    const [comments, setComments] = useState([]);
  

  const fetchComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  const value = {
      comments, 
      fetchComments,
      setComments
  }


  return(
      <CommentsContext.Provider value={value}>
          {children}
      </CommentsContext.Provider>
  )
}