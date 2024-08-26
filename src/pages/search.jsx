import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Juris from '@/components/juris';
import RecentDecisions from '@/components/RecentDecisions';

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px 20px 20px;
  background-color: white;
  margin-top: 20px;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: white;
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
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Dropdown = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
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

const Content = styled.div`
  margin-top: 120px; 
`;



export default function Search() {
  const router = useRouter();
  const { query } = router.query;
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Header>
      <Title onClick={navigateToHome}>Dejures</Title>
        <SearchContainer>
          <Dropdown value="">
            <option value="">Todos</option>
            <option value="Trabalhista">Trabalhista</option>
            <option value="Contratual">Contratual</option>
            <option value="Cível">Cível</option>
            <option value="Penal">Penal</option>
            <option value="Tributário">Tributário</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Ambiental">Ambiental</option>
            <option value="Constitucional">Constitucional</option>
          </Dropdown>
          <SearchInput
            type="text"
            placeholder="Filtrar por categoria"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </SearchContainer>
        <LoginButton onClick={navigateToLogin}>
            Entrar
          </LoginButton>
      </Header>
      <Content>
        <h2>Resultados da Pesquisa para: "{searchQuery}"</h2>
        <RecentDecisions query={searchQuery} />
        <Juris filtro={searchQuery} />
      </Content>
    </Container>
  );
}
