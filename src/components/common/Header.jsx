"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import LoginButton from "./LoginButton";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  min-height: 60px; 
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 600px) {
    padding: 0 10px;
    height: auto;
  }
`;


const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #191970;
  margin: 0;
  font-weight: 800;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

const NavButton = styled.div`
  position: relative;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: #191970;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
  transition: color 0.3s;

  &:hover {
    color: #005bb5;
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.$mobileOnly ? "none" : "flex")};
    font-size: 0.8rem;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  display: ${(props) => (props.$open ? "block" : "none")};
  z-index: 10;

  @media (max-width: 600px) {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #333;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #f8f9fa;
    color: #005bb5;
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <HeaderContainer>
      <LogoAndNav>
      <Link href="/" passHref>
          <Logo>Dejures</Logo>
        </Link>
        <Nav>
          <NavButton>
            <Button $underline={true} onClick={toggleDropdown}>
              Serviços para Você <IoIosArrowDown />
            </Button>
            <Dropdown $open={dropdownOpen} onMouseLeave={closeDropdown}>
              <Link href="/gerador-peticoes" passHref legacyBehavior>
                <DropdownItem>Gerador de Petições Trabalhistas</DropdownItem>
              </Link>
              <Link href="/calculos-juridicos" passHref legacyBehavior>
                <DropdownItem>Cálculos Jurídicos</DropdownItem>
              </Link>
              <Link href="/consulta-jurisprudencias" passHref legacyBehavior>
                <DropdownItem>Consulta de Jurisprudências</DropdownItem>
              </Link>
              <Link href="/consulta-processos" passHref legacyBehavior>
                <DropdownItem>Consulta de Processos</DropdownItem>
              </Link>
            </Dropdown>
          </NavButton>
          <Link href="/assine-ja" passHref legacyBehavior>
            <Button $underline={true} $mobileOnly={true}>
              Assine Já
            </Button>
          </Link>
          <Link href="/sobre-nos" passHref legacyBehavior>
            <Button $underline={true} $mobileOnly={true}>
              Sobre Nós
            </Button>
          </Link>
        </Nav>
      </LogoAndNav>
      <LoginButton />
    </HeaderContainer>
  );
}
