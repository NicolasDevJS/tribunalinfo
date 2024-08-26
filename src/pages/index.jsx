import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";  
import Footer from "@/components/footer";
import Questions from "@/components/questions";
import TopJurisprudencias from "@/components/TopJurisprudencias";
import ServicosCarrossel from "@/components/ServicosCarrossel";

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px 80px 20px; /* Ajuste o padding inferior */
  background-color: white;
  margin-top: 20px;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
`;

const Title = styled.h1`
  color: #130066;
  margin: 0;
`;

const LoginButton = styled.button`
  padding: 15px 35px;
  background: #ffffff;
  border: 1px solid #cccccc; 
  border-radius: 8px;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 2vw;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    background: #e2e2e2;
    color: #000000;
    border: 1px solid #bbbbbb;
  }
`;

const SearchContainer = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`;

const SearchTitle = styled.h2`
  color: #000000;
  font-size: 60px;
  margin-bottom: 20px;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
`;

const SearchInput = styled.input`
  padding: 25px;
  padding-right: 50px; 
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1rem;
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #000000;
  font-size: 24px;

  &:hover {
    color: #626263;
  }
`;



export default function Home() {
  const [filtro, setFiltro] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (filtro.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(filtro)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  const handleButton = (buttonNumber) => {
    console.log(`Botão ${buttonNumber} clicado`);
  };

  return (
    <>
      <Container>
        <Header>
          <Title>Dejures</Title>
          <LoginButton onClick={navigateToLogin}>
            Entrar
          </LoginButton>
        </Header>
        <SearchContainer>
          <SearchTitle>Pesquisa completa de jurisprudência</SearchTitle>
          <SearchWrapper>
            <SearchInput
              type="text"
              placeholder="Digite sua pesquisa..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              onKeyPress={handleKeyPress} 
            />
            <SearchIcon onClick={handleSearch}>
              <MdSearch />
            </SearchIcon>
          </SearchWrapper>
        </SearchContainer>
        <ServicosCarrossel/>
        <TopJurisprudencias/>
        <Questions /> 
      </Container>
      <Footer/>
    </>
  );
}
