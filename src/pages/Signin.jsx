import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"; // path as per your setup
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";
import Vector from "../component/image/Vector.png";

export const Signin = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard/dashboardtable"); // go to home or dashboard
    } catch (err) {
      console.error("Login error:", err);
      setError(true);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-between w-1/2 p-4 bg-gray-50">
        <div className="max-w-md p-8 mx-auto mt-12 bg-white shadow-lg rounded-2xl">
          <div className="mb-6 text-left">
            <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
            <p className="mt-2 text-gray-500">Enter your email and password to sign in!</p>
          </div>

          <form className="space-y-4" onSubmit={SubmitHandler}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white transition duration-200 bg-black rounded-lg hover:bg-blue-700"
            >
              Sign in
            </button>

            {error && <p className="text-sm text-red-500">Invalid Password or Email. Please try again.</p>}

            <div className="flex flex-col justify-between mt-2 text-sm">
              <p className="text-blue-600 cursor-pointer hover:underline">Forgot your password?</p>
              <p className="text-gray-600">
                Don’t have an account?{' '}
               <Link to="/signup">
                <span className="text-blue-600 cursor-pointer hover:underline">Sign up</span>
                </Link>
                </p>
            </div>
          </form>
        </div>

        <footer className="mt-8 mb-4 space-x-4 text-sm text-center text-gray-500">
          <span className="cursor-pointer hover:underline">FAQs</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Terms & Conditions</span>
          <span className="cursor-pointer hover:underline">Refund Policy</span>
        </footer>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center w-1/2 p-8 bg-black">
        <div className="text-center text-white">
          <div className="inline-block text-left">
            <div className="flex items-center mb-2 space-x-2">
              <img src={Vector} alt="logo" className="w-10 h-10" />
              <h1 className="text-4xl font-extrabold text-white">Neptastic</h1>
            </div>
            <p className="text-lg text-gray-400 mb-4 ml-[5.5rem]">Creative Hub</p>
          </div>
          <p className="max-w-xl mx-auto mt-2 mb-6 text-xl italic font-light text-gray-300">
            “Our web projects run smoother, launch faster, and look sharper — all thanks to this CMS.”
          </p>
          <p className="text-sm font-medium text-gray-400">Ishwar Acharya - CEO Neptastic</p>
        </div>
      </div>
    </div>
  );
};
