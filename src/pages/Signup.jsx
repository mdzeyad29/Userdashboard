import React from 'react';

export const Signup = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen p-4 bg-gray-50">
      {/* Main Form Section */}
      <div className="max-w-md p-8 mx-auto mt-12 bg-white shadow-lg rounded-2xl">
        {/* Upper Side */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
        </div>

        {/* Lower Side - Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
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
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-8 mb-4 space-x-4 text-sm text-center text-gray-500">
        <span className="cursor-pointer hover:underline">FAQs</span>
        <span className="cursor-pointer hover:underline">Privacy Policy</span>
        <span className="cursor-pointer hover:underline">Terms & Conditions</span>
        <span className="cursor-pointer hover:underline">Refund Policy</span>
      </footer>
    </div>
  );
};
