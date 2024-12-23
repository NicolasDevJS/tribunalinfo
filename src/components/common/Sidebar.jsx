import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import Link from "next/link";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px 0 0 8px;
  color: #0a2540;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1050;
  display: flex;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 80%;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    border-radius: 0;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #cccccc;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 1px;
  background: none;
  border: none;
  font-size: 24px;
  color: #0a2540;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005bb5;
  }
`;

const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 0;
`;

const SidebarFooter = styled.div`
  padding: 15px 0;
  background-color: #f5f5f5;
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0 20px;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #cccccc;
  margin: 15px 0;
`;

const ItemButton = styled.div`
  width: 100%;
  padding: 10px 20px;
  background: none;
  color: #0a2540;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6e6fa;
  }
`;

const HelpTitle = styled(SectionTitle)``;

const HelpLink = styled.a`
  padding: 5px 20px;
  display: block;
  text-decoration: none;
  color: #0a2540;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  width: calc(100% - 40px);
  padding: 10px 35px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  color: #0a2540;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin: 20px auto 0;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e6e6fa;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
`;

const MenuToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #0a2540;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 450px) {
    top: 10px;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>
      <SidebarContainer isOpen={isOpen}>
        {isOpen && (
          <CloseButton onClick={() => setIsOpen(false)}>
            <FiX />
          </CloseButton>
        )}
        <SidebarHeader>Bem-vindo, Fulano</SidebarHeader>
        <SidebarContent>
          <SectionTitle>Soluções Disponíveis</SectionTitle>
          <Link href="/peticoes-trabalhistas" passHref>
            <ItemButton>Gerador de Petições Trabalhistas</ItemButton>
          </Link>
          <Link href="/painel-de-calculos" passHref>
            <ItemButton>Cálculos Jurídicos</ItemButton>
          </Link>
          <Link href="/jurisprudencia" passHref>
            <ItemButton>Consulta de Jurisprudências</ItemButton>
          </Link>
          <Link href="/pesquisa-juridica" passHref>
            <ItemButton>Consulta de Processos</ItemButton>
          </Link>
          <Divider />
          <SectionTitle>Planos e Assinaturas</SectionTitle>
          <Link href="/" passHref>
            <ItemButton>Gerenciar Assinatura</ItemButton>
          </Link>
          <Link href="/assine-ja" passHref>
            <ItemButton>Consultar Planos e Benefícios</ItemButton>
          </Link>
          <Divider />
          <SectionTitle>Histórico</SectionTitle>
          <Link href="/" passHref>
            <ItemButton>Histórico de Jurisprudências</ItemButton>
          </Link>
          <Link href="/" passHref>
            <ItemButton>Histórico de Processos</ItemButton>
          </Link>
        </SidebarContent>
        <SidebarFooter>
          <HelpTitle>Ajuda</HelpTitle>
          <HelpLink href="#ajuda-jurisprudencias">Ajuda para Consultar Jurisprudências</HelpLink>
          <HelpLink href="#ajuda-processos">Ajuda para Consultar Processos</HelpLink>
          <HelpLink href="#ajuda-calculos">Ajuda com Cálculos Jurídicos</HelpLink>
          <HelpLink href="#ajuda-trabalhista">Ajuda com Processos Trabalhistas</HelpLink>
          <HelpLink href="#falar-conosco">Falar Conosco</HelpLink>
          <LogoutButton onClick={handleLogout}>
            Sair <FiLogOut />
          </LogoutButton>
        </SidebarFooter>
      </SidebarContainer>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Sidebar;
