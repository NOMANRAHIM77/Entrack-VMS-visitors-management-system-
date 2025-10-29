import React from 'react'

// Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // import firebase auth from our setup

// React hook form and Zod
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// signup schemas
import signUpSchemas from '../AuthSchemas/SignUpSchemas'


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
      // Firebase signup function
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log("✅ User created:", userCredential.user);
      alert("Account created successfully!");

      // clear form
      reset();
    } catch (error) {
      console.error("❌ Signup error:", error.message);
      alert(error.message);
    }
  };


  return (
    <>
    <h1 className='text-center' >Hospital VMS</h1>
    <h2  className='text-center' >SignUp</h2>

<form onSubmit={handleSubmit(onsubmit)}>

      <input {...register("firstname")} placeholder='First name' />
      {errors.firstname && <p>{errors.firstname.message}</p>}

      <input {...register("surname")} placeholder='Last name' />
      {errors.surname && <p>{errors.surname.message}</p>}

       <input {...register("email")} placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}

       <input {...register("organizationName")} placeholder='Organization name' />
      {errors.organizationName && <p>{errors.organizationName.message}</p>}

       <input {...register("password")} placeholder='Password' />
      {errors.password && <p>{errors.password.message}</p>}

       <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          {isSubmitting ? "Creating..." : "Sign Up"}
        </button>

</form>


    </>
  )
}

export default SignUp