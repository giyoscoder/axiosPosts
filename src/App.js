import React from "react";
import style from "./App.module.scss";
import { instance } from "./Utils/axiosInstance";
import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Logo from "./Assets/Log.png";
import { Carousel, Button } from "antd";
import Home from "./Pages/Home/Home";
import ProtectRoute from "./Utils/ProtectRoute";
import CreateProducts from "./Pages/CreateProducts/CreateProducts";
import Login from "./Pages/Login/Login";
import SingleProducts from "./Pages/SingleProducts/Singleproducts";
import EditProducts from "./Pages/EditProducts/Edit";

function App() {
  return (
    <>
      <div className={style.container}>
        <nav>
          <div className={style.pages}>
            <img src={Logo} alt="Logo" />
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/createproducts"}>Create Products</NavLink>
          </div>
          <div className={style.register}>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:id" element={<EditProducts />} />
          <Route
            path="/createproducts"
            element={
              <ProtectRoute>
                <CreateProducts />
              </ProtectRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
