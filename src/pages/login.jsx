import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 26%) 0%,
    hsl(250deg 81% 25%) 10%,
    hsl(254deg 64% 22%) 20%,
    hsl(258deg 47% 19%) 30%,
    hsl(262deg 27% 16%) 40%,
    hsl(0deg 0% 13%) 50%,
    hsl(262deg 27% 16%) 60%,
    hsl(258deg 47% 19%) 70%,
    hsl(254deg 64% 22%) 80%,
    hsl(250deg 81% 25%) 90%,
    hsl(240deg 100% 26%) 100%
  );
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  background: #033d80;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

const LinkContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const StyledLink = styled.a`
  color: #0070f3;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', login);
    console.log('Senha:', senha);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
          
          <LinkContainer>
            <Link href="/cadastro" passHref>
              <StyledLink>Cadastre-se</StyledLink>
            </Link>
          </LinkContainer>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
