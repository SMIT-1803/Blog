import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Signup from "../pages/Signup";
import Home from "../pages/Home.jsx"

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(state => state.auth.status);
  return isLoggedIn
    ? <Home/>
    : <Signup/>;
}
