"use client";

import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #191970;
  color: #e5e7eb;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1rem;
  justify-content: center;

  span {
    font-size: 1.1rem;
    white-space: nowrap;


    &:not(:nth-child(2)) {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
  justify-content: center;

  a {
    color: #e5e7eb;
    transition: color 0.3s;

    &:hover {
      color: #60a5fa;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ContactInfo>
          <span>Telefone: (11) 98765-4321</span>
          <span>contato@dejures.com.br</span>
          <span>suporte@dejures.com.br</span>
        </ContactInfo>
        <SocialIcons>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </SocialIcons>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
