import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import CreateUser from "./CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
