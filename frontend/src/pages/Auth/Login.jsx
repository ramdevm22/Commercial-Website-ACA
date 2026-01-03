import { useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/auth";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      alert("Login successful");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials");
    }
  }

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
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
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
}
