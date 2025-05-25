import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
    navigate("/login");
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        px-4 py-2 text-sm font-medium rounded-full
        bg-red-500 text-white transition-shadow shadow-sm
        hover:shadow-md hover:bg-red-600
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
