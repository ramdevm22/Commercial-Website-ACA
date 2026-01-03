import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: username.trim(),
          email: email.trim(),
          password,
        },
        {
          withCredentials: false,
        }
      );

      alert("Registration successful");
      navigate("/Login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Header />

      <div className="login-content register-content">
        <h2>Register</h2>

        {/* IMPORTANT FIX */}
        <img src="/images/sky.jpg" alt="register" />

        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
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
