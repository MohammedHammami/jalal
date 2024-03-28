import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Footerar from "./components/Footerar";
import Navbarar from "./components/Navbarar/Navbar";
function App() {
  
  return (
    <div className="App">
      
      <Navbarar/>:<Navbar />
      
      <Routes>
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/" element={<><Home /></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
      <Footerar/>:<Footer/>
      
    </div>
  );
}

export default App;
