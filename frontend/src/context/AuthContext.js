import { createContext, useContext, useEffect, useState } from "react";
import { getMe, login, signup, logout } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe().then((data) => {
      if (data.user) setUser(data.user);
      setLoading(false);
    });
  }, []);

  async function handleLogin(email, password) {
    const data = await login({ email, password });
    if (data.user) setUser(data.user);
    return data;
  }

  async function handleSignup(name, email, password) {
    const data = await signup({ name, email, password });
    if (data.user) setUser(data.user);
    return data;
  }

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login: handleLogin, signup: handleSignup, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
