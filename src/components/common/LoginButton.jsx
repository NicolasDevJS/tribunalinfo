"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";

const LoginButtonWrapper = styled.button`
  padding: 10px 35px;
  background: #ffffff;
  border: 1px solid #191970;
  color: #0a2540;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 10px;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    background: ${({ selected }) => (selected ? "#191970" : "#dcdcfc")};
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 0.9rem;
    margin-right: 15px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 550px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 400px;
    padding: 1.5rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
  text-decoration: underline;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid #191970;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #191970;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;

const OrSeparator = styled.div`
  margin: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
    border-color: #bbb;
  }

  svg {
    margin-right: 8px;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const SwitchText = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;

  & span {
    color: #333;
  }

  & a {
    color: #191970;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { handleLogin, handleRegister, loading, error } = useAuth();
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onLogin(); // Chama a função de login
    }
  };

  const onLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Preencha todos os campos.");
      return;
    }

    try {
      await handleLogin(email, password);
      closeModal();
      window.location.reload(); // Recarrega a página atual
    } catch {
      setErrorMessage(error || "Erro ao fazer login.");
    }
  };

  const onRegister = async () => {
    if (!email || !password || password !== confirmPassword) {
      setErrorMessage("Preencha todos os campos corretamente.");
      return;
    }

    try {
      await handleRegister({ username: email, password });
      setIsLogin(true);
      window.location.reload(); // Recarrega a página atual
    } catch {
      setErrorMessage(error || "Erro ao cadastrar.");
    }
  };
  return (
    <>
      <LoginButtonWrapper onClick={openModal}>Entrar</LoginButtonWrapper>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <LoginBox onKeyDown={onKeyDown}>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              {isLogin ? (
                <>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={onLogin} disabled={loading}>
                    {loading ? "Entrando..." : "Login"}
                  </Button>
                  <OrSeparator>Ou</OrSeparator>
                  <GoogleButton>
                    <FcGoogle /> Entrar com Google
                  </GoogleButton>
                  <SwitchText>
                    <span>Ainda não tem conta? </span>
                    <a onClick={() => setIsLogin(false)}>Cadastre-se</a>
                  </SwitchText>
                </>
              ) : (
                <>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button onClick={onRegister} disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                  <SwitchText>
                    <a onClick={() => setIsLogin(true)}>Voltar para Login</a>
                  </SwitchText>
                </>
              )}
            </LoginBox>
          </div>
        </ModalOverlay>
      )}
    </>
  );
}
