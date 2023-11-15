import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import FiltredProducts from "./Components/FiltredProducts/FiltredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <div className="App">
      <BrowserRouter>
        {authUser ? <Navbar /> : ""}
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          <Route path="/filtredProducts/:type" element={<FiltredProducts />} />
          <Route
            path="/filtredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
