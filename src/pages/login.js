import React from "react";
import Background from "../componets/background";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative justify-around flex w-full h-full">
      <Background />

      <div className="p-8 w-96 max-md:w-80 justify-around bg-gray-800 rounded absolute right-10 top-10 shadow-gray-400  my-auto shadow-xl">
        <h2 className="sm:hidden max-w-sm text-xs font-bold text-white">
          Join events and share gifts virtually: Marriages, Concerts, Birthdays Church Services...
        </h2>
        <form>
          <input
            className="rounded block max-md:w-64 justify-center py-2 my-5 w-80 px-10"
            id="loginEmail"
            type=""
            placeholder="Enter Email or Phone number"
          ></input>
          <input
            className="rounded max-md:w-64 block justify-center shadow-slate-400 text-gray-700 w-80 py-2 my-5 px-10"
            id="loginpwd"
            type="password"
            placeholder="Enter password"
          ></input>
          <button className="rounded max-md:w-64 bg-blue-300 block px-5 py-2 w-80 shadow-white">Login</button>
          <a href="register.js" className="mt-6 text-white">
            Forget Password
          </a>
          <div className="border-white-300 max-md:w-64 border my-5"></div>
          <Link to="/register" className="rounded max-md:w-28 bg-blue-300 ml-10 py-2 px-10 w-44 shadow-white">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
