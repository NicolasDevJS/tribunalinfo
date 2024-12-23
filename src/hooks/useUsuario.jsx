import { useState, useEffect } from "react";
import { getUsuario } from "../services/useUsuario";
import jwtDecode from "jwt-decode";

const useUsuario = (token) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      if (!token) {
        setError("Token não fornecido.");
        setLoading(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const usuarioId = decodedToken?.sub;

        if (!usuarioId) {
          throw new Error("ID do usuário não encontrado no token.");
        }

        const data = await getUsuario(token, usuarioId);
        setUsuario(data);
      } catch (err) {
        setError(err.message || "Erro ao buscar usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [token]);

  return { usuario, loading, error };
};

export default useUsuario;
