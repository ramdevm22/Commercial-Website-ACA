import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { username, email, password })
      .then((result) => {
        console.log(result);
        navigate("./Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header></Header>
      <div className="login-content register-content">
        <h2>Register</h2>
        <img src="./images/sky.jpg" alt="" />
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <div className="new-customer">
            Already have an account?
            <Link to="/Login" className="login-link">
              login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
