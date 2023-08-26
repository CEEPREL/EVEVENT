import React from "react";
import Background from "../componets/background";
import Forget_pass from "../componets/forget_pass";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [openForgetPass, setOpenForgetPass] = useState(false);
  return (
    <div>
      <Forget_pass open={openForgetPass} onClose={() => setOpenForgetPass(false)} />
      <div className="relative justify-around flex w-full h-full z-0">
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
            <p onClick={() => setOpenForgetPass(true)} className="mt-6 text-white">
              Forget Password
            </p>
            <div className="border-white-300 max-md:w-64 border my-5"></div>
            <Link href="register.js" className="rounded max-md:w-28 bg-blue-300 ml-10 py-2 px-10 w-44 shadow-white">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
