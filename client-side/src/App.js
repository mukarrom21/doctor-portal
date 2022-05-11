import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Share/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
