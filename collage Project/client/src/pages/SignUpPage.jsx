
import React from "react";
import { Link } from "react-router-dom";


const SignUpPage = () => {
  return (
  
<div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-gray-800 ">
        <h2 className="text-2xl font-bold text-center mb-6">User Registration</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="block mb-2 font-medium">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="block mb-2 font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 border text-black border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 font-medium">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full p-3 border text-black border-gray-300 rounded-lg"
            />
          </div>
          <button type="submit" className="w-full mt-4 p-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700">
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link
          to="/login" className="text-rose-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
