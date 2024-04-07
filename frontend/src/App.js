import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Footerar from "./components/Footerar";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts";
function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        {/* <Route path="/CreatePost" element={<CreatePost />} /> */}
        {/* <Route path="/" element={<><Home /></>} /> */}
        {/* <Route path="/posts/3" element={<><Posts /></>} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
     
      {/* <Footerar/>:<Footerar/> */}
      
    </div>
  );
}

export default App;
