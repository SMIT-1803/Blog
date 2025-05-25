import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const createAccount = await authService.createAccount(data);
      if (createAccount.$id) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login({ userData: userData }));
        navigate("/");
      } else {
        setError(createAccount.message + " Please Login.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div className="flex justify-center">
          <Logo width="120px" />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Create Your Account
        </h2>
        {error && <p className="text-center text-red-600 text-sm">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Jane Doe"
            {...register("name", { required: "Name is required" })}
          />
          <Input
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter a valid email",
              },
            })}
          />
          <Input
            label="Password"
            placeholder="••••••••"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <Button type="submit" className="w-full bg-blue-600 text-white">
            Sign Up
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
