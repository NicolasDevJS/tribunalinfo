import axios from "axios";

const API_URL = "https://juris-aqh8hwbgebh9hqem.brazilsouth-01.azurewebsites.net/api/Usuario";

export const getUsuario = async (token, usuarioId) => {
  try {
    const response = await axios.get(`${API_URL}/${usuarioId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar informações do usuário:", error.response || error.message);
    throw error;
  }
};
