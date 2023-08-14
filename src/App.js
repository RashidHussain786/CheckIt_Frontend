import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import Taskmanager from "./Pages/Taskmanager";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} /> 
    <Route exact path="/login" element={<Login/>} /> 
    <Route exact path="/signup" element={<Register/>} /> 
    <Route exact path="/chat" element={<Chat/>} /> 
    <Route exact path="/taskmanager" element={<Taskmanager/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
