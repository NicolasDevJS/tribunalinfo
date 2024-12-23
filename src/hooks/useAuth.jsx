import { useState } from "react";
import { login, register } from "../services/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token); // Salva o token no localStorage
      setUser(data); // Atualiza o estado do usuário com os dados retornados
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(userData);
      localStorage.setItem("token", data.token); // Salva o token no registro também
      setUser(data); // Atualiza o estado do usuário com os dados retornados
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao registrar.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove o token do localStorage
    setUser(null); // Reseta o estado do usuário
  };

  return { user, loading, error, handleLogin, handleRegister, logout };
};
