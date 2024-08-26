// pages/api/auth/register.js
import { readUsersFromFile, writeUsersToFile } from '../../../../utils/users';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'As senhas não coincidem.' });
    }

    const users = readUsersFromFile(); // Lê os usuários do arquivo
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find((user) => user.email === normalizedEmail);
    if (existingUser) {
      console.log('Usuário já existe:', existingUser);
      return res.status(400).json({ message: 'Usuário já existe.' });
    }

    users.push({ email: normalizedEmail, password }); // Adiciona o novo usuário
    writeUsersToFile(users); // Escreve a lista de usuários atualizada no arquivo

    console.log('Usuário registrado:', users);
    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
}
