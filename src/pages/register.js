import React from "react";
import Background from "../componets/background";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="relative flex w-full h-full">
      <Background />
      <div className="p-8 w-96 max-md:w-80 justify-around bg-gray-800 rounded absolute right-10 top-10 shadow-gray-400 my-auto shadow-xl">
        <h2 className="o-0 m-0 sm:hidden max-w-sm text-xs font-bold text-white">
          Join events and share gifts virtually: Marriages, Concerts, Birthdays Church Services...
        </h2>
        <form>
          <input
            className="rounded block max-md:w-64 justify-center py-2 my-5 w-80 px-10"
            id="loginEmail"
            type=""
            placeholder="Full Name"
          ></input>
          <input
            className="rounded block max-md:w-64 justify-center py-2 my-5 w-80 px-10"
            id="loginEmail"
            type=""
            placeholder="Email"
          ></input>
          <input
            className="rounded block max-md:w-64 justify-center py-2 my-5 w-80 px-10"
            id="loginpwd"
            type="password"
            placeholder="Password"
          ></input>
          <button className="rounded max-md:w-64 bg-blue-300 block px-5 py-2 w-80 shadow-white">Signup</button>
          <a className="mt-6 text-white" href="./pages/login.js">
            Forget Password
          </a>
          <div className="border-white-300 border my-5"></div>
          <Link to="/login" className="rounded bg-blue-300 ml-10 py-2 w-44 px-10 shadow-white">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
