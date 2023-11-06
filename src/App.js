import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import Task from "./Components/Task";


function App() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id" element={<Task />} />
    </Routes>
    )
}

export default App;
