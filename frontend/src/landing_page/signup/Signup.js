import React from "react";

function Signup() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="/media/images/signup.png"
            alt="Signup"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-md-6">
          <h1>Signup now</h1>
          <p className="text-muted mb-4">
            Or track your existing application.
          </p>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter your password"
          />

          <button className="btn btn-primary px-4">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;