import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter
import { createGlobalStyle } from 'styled-components';
import * as S from './styles';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  #__next {
    height: 100%;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !confirmPassword)) {
        setMessage('Preencha todos os campos.');
        return;
    }

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const body = isLogin ? { email, password } : { email, password, confirmPassword };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok && isLogin) {
        router.push('/'); 
      }
    } catch (error) {
      setMessage('Ocorreu um erro. Tente novamente.');
    }
  };

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.LoginBox>
          <S.Title>{isLogin ? 'Login' : 'Cadastre-se'}</S.Title>
          <S.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <S.Input
              type="password"
              placeholder="Confirme a Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <S.Button onClick={handleSubmit}>
            {isLogin ? 'Login' : 'Cadastrar'}
          </S.Button>
          <S.SwitchText onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Ou cadastre-se' : 'Voltar para Login'}
          </S.SwitchText>
          {message && <p>{message}</p>}
          <S.BackButton onClick={handleBackClick}>Voltar</S.BackButton>
        </S.LoginBox>
      </S.Container>
    </>
  );
};

export default Login;
