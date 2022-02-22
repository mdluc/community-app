import { combineReducers } from "redux";
import { commentsReducer } from "./comment/comment.reducer";
import { postsReducer } from "./post/post.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
  
});

export default rootReducer;
