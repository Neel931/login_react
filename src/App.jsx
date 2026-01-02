import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../src/pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
