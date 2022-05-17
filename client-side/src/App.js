import "./App.css";
import Navbar from "./pages/Share/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import Login from "./pages/Login/Login";
import Footer from "./pages/Share/Footer";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
