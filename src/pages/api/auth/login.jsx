// pages/api/auth/login.js
import { readUsersFromFile } from '../../../../utils/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    const users = readUsersFromFile(); // Lê os usuários do arquivo
    const normalizedEmail = email.trim().toLowerCase();

    const user = users.find(
      (user) => user.email === normalizedEmail && user.password === password
    );

    if (user) {
      console.log('Usuário logado com sucesso:', user);
      res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      console.log('Credenciais inválidas:', { email: normalizedEmail, password });
      console.log('Usuários registrados:', users);
      res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
}
