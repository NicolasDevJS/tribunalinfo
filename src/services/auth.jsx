import axios from "axios";

const API_URL = "https://juris-aqh8hwbgebh9hqem.brazilsouth-01.azurewebsites.net/api/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
