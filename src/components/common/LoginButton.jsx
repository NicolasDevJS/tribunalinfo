"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const LoginButtonWrapper = styled.button`
  padding: 15px 35px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  color: #0a2540;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 10px;
  font-weight: 500;
  font-size: 20px;

 
    &:hover {
    background: ${({ selected }) => (selected ? "#191970" : "#e6e6fa")};
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

const ResetPasswordLink = styled.a`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showResetLink, setShowResetLink] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsResetPassword(false); 
    setErrorMessage("");
    setShowResetLink(false);
  };

  const handleLogin = () => {
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (!email) {
      setErrorMessage("Você precisa inserir o email.");
      return;
    }
    if (!password) {
      setErrorMessage("Você precisa inserir a senha.");
      return;
    }
    if (email !== "user@example.com" || password !== "password123") {
      setErrorMessage("Login ou senha incorretos.");
      setShowResetLink(true); 
      return;
    }

    setErrorMessage(""); 
    alert("Login bem-sucedido!");
  };

  const handleResetPassword = () => {
    const email = document.querySelector('input[type="email"]').value.trim();

    if (!email) {
      setErrorMessage("Você precisa inserir o email.");
      return;
    }

    setErrorMessage(""); 
    alert("Instruções para redefinir sua senha foram enviadas!");
    closeModal(); 
  };

  return (
    <>
      <LoginButtonWrapper onClick={openModal}>Entrar</LoginButtonWrapper>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <LoginBox>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              {isResetPassword ? (
                <>
                  <Input type="email" placeholder="Email" />
                  <Button onClick={handleResetPassword}>Enviar</Button>
                </>
              ) : isLogin ? (
                <>
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Senha" />
                  {showResetLink && (
                    <ResetPasswordLink onClick={() => setIsResetPassword(true)}>
                      Redefinir senha
                    </ResetPasswordLink>
                  )}
                  <Button onClick={handleLogin}>Login</Button>
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
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Senha" />
                  <Input type="password" placeholder="Confirme a senha" />
                  <Button>Cadastrar</Button>
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
