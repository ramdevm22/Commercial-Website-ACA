import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        }
      });
  };

  return (
    <>
      <Header></Header>
      <div className="login-content">
        <h2>Login</h2>
        <img src="./images/sky.jpg" alt="" />
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
          <div className="new-customer">
            New Customer?
            <Link to="/Register" className="register-link">
              register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
