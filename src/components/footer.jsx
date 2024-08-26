import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importando ícones das redes sociais

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.p`
  width: 40%; 
  margin: 0;
  color: #333;
  font-size: 0.9rem;
  line-height: 1.5;
  word-wrap: break-word; 
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  color: #333;
  font-size: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

export default function Footer() {
  const randomQuote = "A frase aqui pode se dividir em várias linhas conforme necessário, dependendo do que o giusepe achar legal";

  return (
    <FooterContainer>
      <FooterText>{randomQuote}</FooterText>
      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
}
