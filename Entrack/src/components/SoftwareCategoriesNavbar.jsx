import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed

const SoftwareCategoriesNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="h-16 px-6 flex items-center justify-between bg-slate-900 text-white">
      
      {/* Left section */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-semibold tracking-wide">
          MyCompany
        </h1>

       
      </div>

      {/* Right section */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default SoftwareCategoriesNavbar;
