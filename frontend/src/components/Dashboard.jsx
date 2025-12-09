import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [message, setMessage] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await API.get("/protected");
        setMessage("Welcome to our platform");
      } catch (err) {
        setMessage("Error loading data");
      }
    };
    load();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">

      {/* ⭐ NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-2xl bg-white/10 border-b border-white/20 py-4 px-8 flex justify-between items-center shadow-lg">
          
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-white drop-shadow animate-glow">
            DevSpace 
          </h1>

          {/* LINKS */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              Docs
            </li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              Tools
            </li>
            <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
              Community
            </li>
          </ul>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/logout")}
            className="bg-white/20 px-4 py-2 rounded-xl text-white border border-white/30 shadow hover:bg-white/30 hover:scale-105 transition-all"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex items-center justify-center px-6 py-10 min-h-screen">

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-40 h-40 bg-pink-400/30 rounded-full blur-3xl animate-floating1"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-400/30 rounded-full blur-3xl animate-floating2"></div>
          <div className="absolute top-20 right-1/3 w-32 h-32 bg-purple-400/30 rounded-full blur-2xl animate-floating3"></div>
        </div>

        {/* CARD */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-3xl p-10 text-center animate-fadeSlideUp mt-20">

          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl mb-4 animate-textGlow">
            Welcome Developers 
          </h1>

          <p className="text-lg text-indigo-100 mb-8 animate-fadeInSlow">
            {message}
          </p>

          <p className="text-md text-purple-100 mb-10 animate-fadeInSlow delay-200">
            Build • Innovate • Deploy  
            <br />
            Your creative journey starts here.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="p-6 bg-white/20 border border-white/30 rounded-2xl shadow-lg hover:scale-110 transition transform duration-300 animate-fadeInSlow">
              <h2 className="text-xl font-semibold text-white mb-2">Docs</h2>
              <p className="text-indigo-100 text-sm">
                Explore API references & developer guides.
              </p>
            </div>

            <div className="p-6 bg-white/20 border border-white/30 rounded-2xl shadow-lg hover:scale-110 transition transform duration-300 animate-fadeInSlow delay-150">
              <h2 className="text-xl font-semibold text-white mb-2">Tools</h2>
              <p className="text-indigo-100 text-sm">
                Access quick utilities & dev environment boosters.
              </p>
            </div>

            <div className="p-6 bg-white/20 border border-white/30 rounded-2xl shadow-lg hover:scale-110 transition transform duration-300 animate-fadeInSlow delay-300">
              <h2 className="text-xl font-semibold text-white mb-2">Community</h2>
              <p className="text-indigo-100 text-sm">
                Connect, share & collaborate with developers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
