import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      
    </>
  );
}


export default App
