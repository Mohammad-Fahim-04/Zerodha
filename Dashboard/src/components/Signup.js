import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/signup", formData);
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="/media/images/signup.png"
            alt="Signup"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-6 p-5">
          <h1>Signup now</h1>
          <p className="text-muted">
            Or track your existing application.
          </p>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control mb-3"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control mb-3"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="btn btn-primary px-4">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;