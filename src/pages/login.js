import React from "react";

function Login() {
  return (
    <div
      className="rounded shadow-gray-700 justify-around my-auto right-10 absolute z-10 mr-20 float-right border-blue-300 shadow-xl 
        max-w-md border-2 mt-20 py-10 px-8 bg-gray-800"
    >
      <form className="block ">
        <input
          className="rounded block justify-center py-2 my-5 w-96 px-10"
          id="loginEmail"
          type=""
          placeholder="Enter Email or Phone number"
        ></input>
        <input
          className="rounded block justify-center shadow-slate-400 text-gray-700 w-96 py-2 my-5 px-10"
          id="loginpwd"
          type="password"
          placeholder="Enter password"
        ></input>
        <button className="rounded bg-blue-300 px-5 py-2 w-96 shadow-white">Login</button>
        <a className="mt-6 text-white" href="/">
          Forget Password
        </a>
        <div className="border-white-300 border my-5"></div>
        <button href="/" className="rounded bg-blue-300 ml-24 py-2 w-44 shadow-white">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Login;
