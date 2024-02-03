import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4 ">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Already have an account yet?{" "}
          <Link className="underline" to="/">
            {" "}
            Sign in.
          </Link>
        </p>
      </div>
      <form>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input className="py-2 font-medium" type="password" />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
