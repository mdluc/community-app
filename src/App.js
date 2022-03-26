import Home from "./pages/Home/home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/posts";
import Users from "./pages/Users/users";
import PostsByUser from "./pages/PostsByUser/postsByUser";
import SinglePostPage from "./pages/SinglePostPage/singlePostPage";
import { PostProvider } from "./context/PostsContext";

function App() {
  return(
    <div>
      <PostProvider>
      <Header/>
      <div className="container main"> 
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/stuff" element={<Users/>}/>
          <Route exact path="/stuff/:id/posts" element={<PostsByUser/>}/>
          <Route exact path="/posts/:id" element={<SinglePostPage/>}/>
        </Routes>
      </div>
     </PostProvider>
    </div>
  )
}

export default App;
