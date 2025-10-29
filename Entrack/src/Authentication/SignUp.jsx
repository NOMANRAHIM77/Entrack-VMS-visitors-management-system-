import React from 'react'

// Firebase
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // import firebase auth from our setup
import { getFirestore, doc, setDoc } from "firebase/firestore";
import  app  from "../firebase"; // ✅ import your initialized firebase app
import { Link, useNavigate } from "react-router-dom";
import Login from './Login';


// React hook form and Zod
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// signup schemas
import signUpSchemas from '../AuthSchemas/SignUpSchemas'


const db = getFirestore(app);


const SignUp = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchemas),
  });

 const onSubmit = async (data) => {
    try {
      // 1️⃣ Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      // 2️⃣ Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstname: data.firstname,
        surname: data.surname,
        email: data.email,
        organizationName: data.organizationName,
        createdAt: new Date().toLocaleString(),
      });

      alert("✅ Account created successfully!");
      reset(); // clear the form
    } catch (error) {
      console.error("❌ Signup Error:", error.message);
      alert(error.message);
    }
  };


  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-amber-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-extrabold text-blue-700 text-center mb-2">
          Hospital VMS
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* First Name */}
          <div>
            <input
              {...register("firstname")}
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstname.message}
              </p>
            )}
          </div>

          {/* Surname */}
          <div>
            <input
              {...register("surname")}
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.surname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.surname.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Organization */}
          <div>
            <input
              {...register("organizationName")}
              placeholder="Organization Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.organizationName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.organizationName.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              {...register("password")}
              placeholder="Password"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Sign Up"}
          </button>

          {/* Optional Login Redirect */}
          <p className="text-center text-sm text-gray-500 mt-3">
            Already have an account?{" "}
            <Link to = "/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>

    </>
  )
}

export default SignUp