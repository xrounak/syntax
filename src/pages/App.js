import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";
import HomePage from './HomePage'


const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
         <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
