import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Footerar from "./components/Footerar";
import Navbarar from "./components/Navbarar/Navbar";
function App() {
  
  return (
    <div className="App">
      
      {/* <Navbarar/>:<Navbarar /> */}
      
      <Routes>
        {/* <Route path="/CreatePost" element={<CreatePost />} /> */}
        <Route path="/" element={<><Home /></>} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
     
      {/* <Footerar/>:<Footerar/> */}
      
    </div>
  );
}

export default App;
